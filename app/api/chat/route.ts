import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { getChatSystemPrompt } from "@/lib/ai/system-prompt"

export const maxDuration = 30

// Convert UI messages (with parts) to core messages (with content)
function toCoreMessages(messages: Array<{ role: string; parts?: Array<{ type: string; text: string }>; content?: string }>) {
  return messages.map((msg) => ({
    role: msg.role as "user" | "assistant",
    content: msg.content ?? msg.parts?.filter((p) => p.type === "text").map((p) => p.text).join("") ?? "",
  }))
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: openai("gpt-5.2-chat-latest"),
      system: getChatSystemPrompt(),
      messages: toCoreMessages(messages),
    })

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
