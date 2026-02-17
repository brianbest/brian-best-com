import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { getChatSystemPrompt } from "@/lib/ai/system-prompt"
import { validateChatInput } from "@/lib/ai/validation"
import {
  checkRateLimit,
  getClientIdentifier,
  getRateLimitHeaders,
} from "@/lib/ai/rate-limit"
import {
  logChatInteraction,
  logSecurityEvent,
} from "@/lib/ai/logging"
import { persistInteraction } from "@/lib/ai/interaction-store"

export const maxDuration = 30
const CHAT_MODEL = "gpt-4.1-2025-04-14"

// Convert UI messages (with parts) to core messages (with content)
function toCoreMessages(
  messages: Array<{
    role: string
    parts?: Array<{ type: string; text: string }>
    content?: string
  }>
) {
  return messages.map((msg) => ({
    role: msg.role as "user" | "assistant",
    content:
      msg.content ??
      msg.parts
        ?.filter((p) => p.type === "text")
        .map((p) => p.text)
        .join("") ??
      "",
  }))
}

// Extract last user message for logging
function getLastUserMessage(
  messages: Array<{
    role: string
    parts?: Array<{ type: string; text: string }>
    content?: string
  }>
): string | undefined {
  const userMessages = messages.filter((m) => m.role === "user")
  const lastMessage = userMessages[userMessages.length - 1]
  if (!lastMessage) return undefined

  return (
    lastMessage.content ??
    lastMessage.parts
      ?.filter((p) => p.type === "text")
      .map((p) => p.text)
      .join("") ??
    undefined
  )
}

export async function POST(req: Request) {
  const clientId = getClientIdentifier(req)

  // Check rate limit
  const rateLimitResult = checkRateLimit(clientId, "chat")

  if (!rateLimitResult.allowed) {
    logSecurityEvent({
      event: "rate_limit_exceeded",
      clientId,
      details: "Chat rate limit exceeded",
    })

    return Response.json(
      { error: "Too many requests. Please wait before sending more messages." },
      {
        status: 429,
        headers: getRateLimitHeaders(rateLimitResult),
      }
    )
  }

  try {
    const body = await req.json()

    // Validate input
    const validation = validateChatInput(body)

    if (!validation.valid) {
      logSecurityEvent({
        event: "validation_failed",
        clientId,
        details: validation.error || "Invalid chat input",
      })

      return Response.json(
        { error: validation.error || "Invalid request" },
        { status: 400 }
      )
    }

    // Log injection attempt if detected (but still process - prompt handles it)
    if (validation.injectionDetected) {
      logSecurityEvent({
        event: "injection_attempt",
        clientId,
        details: "Potential injection attempt detected in chat",
      })
    }

    const { messages } = body
    const coreMessages = toCoreMessages(messages)
    const lastUserMessage = getLastUserMessage(messages)

    // Log the interaction
    logChatInteraction({
      clientId,
      messageCount: messages.length,
      lastUserMessage,
      injectionDetected: validation.injectionDetected || false,
      rateLimited: false,
    })

    const result = streamText({
      model: openai(CHAT_MODEL),
      system: getChatSystemPrompt(),
      messages: coreMessages,
    })

    void Promise.resolve(result.text).then(
      async (responseText) => {
        await persistInteraction({
          endpoint: "chat",
          status: "success",
          clientId,
          model: CHAT_MODEL,
          requestText: lastUserMessage,
          responseText,
          requestPayload: coreMessages,
          injectionDetected: validation.injectionDetected || false,
        })
      },
      async (error: unknown) => {
        await persistInteraction({
          endpoint: "chat",
          status: "error",
          clientId,
          model: CHAT_MODEL,
          requestText: lastUserMessage,
          requestPayload: coreMessages,
          injectionDetected: validation.injectionDetected || false,
          errorMessage: error instanceof Error ? error.message : "Unknown stream error",
        })
      }
    )

    return result.toUIMessageStreamResponse({
      onError: (error) => {
        console.error("Chat stream error:", error)
        return "Sorry, I ran into an error generating a response."
      },
    })
  } catch (error) {
    console.error("Chat request error:", error)
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }
}
