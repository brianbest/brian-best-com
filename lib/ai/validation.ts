import { z } from "zod"

// Injection patterns to detect potential prompt injection attempts
const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /disregard\s+(all\s+)?previous/i,
  /forget\s+(all\s+)?previous/i,
  /you\s+are\s+now/i,
  /pretend\s+(to\s+be|you\s+are)/i,
  /act\s+as\s+(if\s+you\s+are|a)/i,
  /system\s*:/i,
  /\[system\]/i,
  /developer\s+mode/i,
  /\bdan\s+mode/i,
  /jailbreak/i,
  /bypass\s+(your\s+)?(restrictions|rules|guidelines)/i,
  /reveal\s+(your\s+)?(system\s+)?prompt/i,
  /show\s+(me\s+)?(your\s+)?instructions/i,
  /what\s+are\s+your\s+instructions/i,
  /output\s+your\s+(system\s+)?prompt/i,
]

type RawChatMessage = {
  [key: string]: unknown
}

type RawChatInput = {
  messages?: unknown
}

const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().max(4000, "Message too long (max 4000 characters)").optional(),
  parts: z
    .array(
      z.object({
        type: z.string(),
        text: z.string().max(4000, "Message part too long (max 4000 characters)"),
      })
    )
    .optional(),
}).refine(
  (message) => {
    const content = message.content?.trim()
    const hasContent = Boolean(content)
    const hasTextPart = Boolean(
      message.parts?.some((part) => part.type === "text" && part.text.trim().length > 0)
    )
    return hasContent || hasTextPart
  },
  {
    message: "Message must include text content",
  }
)

const chatPayloadSchema = z.object({
  messages: z.array(chatMessageSchema).min(1, "At least one message is required").max(50, "Too many messages (max 50)"),
})

function coerceText(value: unknown): string | undefined {
  if (typeof value === "string") {
    return value
  }
  if (value == null) {
    return undefined
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value)
  }
  if (Array.isArray(value)) {
    return value
      .map((chunk) => {
        if (typeof chunk === "string") return chunk
        if (chunk && typeof chunk === "object" && "text" in chunk) {
          const textValue = (chunk as RawChatMessage).text
          if (typeof textValue === "string") return textValue
        }
        return ""
      })
      .join(" ")
      .trim()
  }
  if (typeof value === "object") {
    const asObj = value as RawChatMessage
    if (typeof asObj.text === "string") return asObj.text
    if (typeof asObj.value === "string") return asObj.value
  }
  return undefined
}

function coerceParts(value: unknown): Array<{ type: string; text: string }> | undefined {
  if (!Array.isArray(value)) return undefined
  if (value.length === 0) return undefined

  const items = value
    .map((item) => {
      if (typeof item !== "object" || item == null) return null
      const parsed = item as RawChatMessage
      const type = typeof parsed.type === "string" ? parsed.type : "text"
      const text = coerceText(parsed.text)
      if (typeof text !== "string" || !text.trim()) return null
      return { type, text }
    })
    .filter((item): item is { type: string; text: string } => Boolean(item))

  return items.length ? items : undefined
}

function normalizeIncomingMessage(raw: RawChatMessage): RawChatMessage | null {
  if (typeof raw !== "object" || raw == null) return null

  const role = raw.role
  if (role !== "user" && role !== "assistant") return null

  const content = coerceText(raw.content)
  const parts = coerceParts(raw.parts)
  const legacyMessage = raw.message
  const legacyText = coerceText(legacyMessage)
  const normalized: RawChatMessage = { role }

  if (typeof content === "string" && content.trim()) {
    normalized.content = content
  }

  if (parts) {
    normalized.parts = parts
  }

  if (!normalized.content && !normalized.parts && typeof legacyText === "string" && legacyText.trim()) {
    normalized.content = legacyText
  }

  return normalized
}

function normalizeIncomingChatPayload(data: unknown): RawChatInput | null {
  if (!data || typeof data !== "object") return null
  const raw = data as RawChatInput

  if (Array.isArray(raw.messages)) {
    return {
      messages: raw.messages
        .map((message) => normalizeIncomingMessage(message as RawChatMessage))
        .filter((item): item is RawChatMessage => item !== null),
    }
  }

  if (typeof (raw as RawChatMessage).message === "string") {
    return {
      messages: [
        {
          role: "user",
          content: coerceText((raw as RawChatMessage).message),
        },
      ],
    }
  }

  return null
}

// Chat input schema
export const chatInputSchema = z.object({
  messages: z
    .array(chatMessageSchema)
    .min(1, "At least one message is required")
    .max(50, "Too many messages (max 50)"),
})

// Job description schema
export const jobDescriptionSchema = z.object({
  jobDescription: z
    .string()
    .min(50, "Job description too short (min 50 characters)")
    .max(15000, "Job description too long (max 15000 characters)"),
})

export interface ValidationResult {
  valid: boolean
  error?: string
  sanitized?: string
  injectionDetected?: boolean
}

/**
 * Detects potential injection attempts in user input
 */
export function detectInjectionAttempt(input: string): boolean {
  const normalizedInput = input.toLowerCase()

  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(normalizedInput)) {
      return true
    }
  }

  return false
}

/**
 * Sanitizes user input by removing potentially dangerous patterns
 * Note: This is a soft sanitization - the prompt should handle injection attempts gracefully
 */
export function sanitizeInput(input: string, maxLength: number = 4000): string {
  // Remove null bytes
  let sanitized = input.replace(/\0/g, "")

  // Remove excessive whitespace
  sanitized = sanitized.replace(/\s{10,}/g, " ")

  // Trim to reasonable length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
  }

  return sanitized.trim()
}

/**
 * Extracts text content from chat messages
 */
function extractMessageContent(
  message: z.infer<typeof chatMessageSchema>
): string {
  if (message.content) {
    return message.content
  }
  if (message.parts) {
    return message.parts
      .filter((p) => p.type === "text")
      .map((p) => p.text)
      .join(" ")
  }
  return ""
}

/**
 * Validates chat input and checks for injection attempts
 */
export function validateChatInput(data: unknown): ValidationResult {
  const normalized = normalizeIncomingChatPayload(data)
  const parseResult = normalized ? chatPayloadSchema.safeParse(normalized) : chatPayloadSchema.safeParse(data)

  if (!parseResult.success) {
    return {
      valid: false,
      error: parseResult.error.issues[0]?.message || "Invalid input",
    }
  }

  // Check for injection attempts in all user messages
  const userMessages = parseResult.data.messages.filter((m) => m.role === "user")
  let injectionDetected = false

  for (const message of userMessages) {
    const content = extractMessageContent(message)
    if (detectInjectionAttempt(content)) {
      injectionDetected = true
      break
    }
  }

  return {
    valid: true,
    injectionDetected,
  }
}

/**
 * Validates job description input and checks for injection attempts
 */
export function validateJobDescription(data: unknown): ValidationResult {
  const parseResult = jobDescriptionSchema.safeParse(data)

  if (!parseResult.success) {
    return {
      valid: false,
      error: parseResult.error.issues[0]?.message || "Invalid input",
    }
  }

  const injectionDetected = detectInjectionAttempt(parseResult.data.jobDescription)
  const sanitized = sanitizeInput(parseResult.data.jobDescription, 15000)

  return {
    valid: true,
    sanitized,
    injectionDetected,
  }
}

export type ChatInput = z.infer<typeof chatInputSchema>
export type JobDescriptionInput = z.infer<typeof jobDescriptionSchema>
