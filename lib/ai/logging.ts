/**
 * Logging utilities for AI interactions
 * Development: console.log/warn/error
 * Production: JSON to stdout (for Vercel logs)
 */

export interface ChatLogEntry {
  timestamp: string
  type: "chat"
  clientId: string
  messageCount: number
  lastUserMessage?: string // Truncated for privacy
  injectionDetected: boolean
  rateLimited: boolean
}

export interface JobFitLogEntry {
  timestamp: string
  type: "job-fit"
  clientId: string
  jobDescriptionLength: number
  injectionDetected: boolean
  rateLimited: boolean
}

export interface SecurityLogEntry {
  timestamp: string
  type: "security"
  event: "injection_attempt" | "rate_limit_exceeded" | "validation_failed"
  clientId: string
  details: string
}

type LogEntry = ChatLogEntry | JobFitLogEntry | SecurityLogEntry

const isDev = process.env.NODE_ENV === "development"

/**
 * Truncate text for logging (preserve privacy)
 */
function truncate(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

/**
 * Core logging function
 */
function log(entry: LogEntry, level: "info" | "warn" | "error" = "info"): void {
  if (isDev) {
    // Development: Pretty print to console
    const prefix =
      level === "error" ? "ERROR" : level === "warn" ? "WARN" : "INFO"
    console.log(`[${prefix}] AI ${entry.type}:`, JSON.stringify(entry, null, 2))
  } else {
    // Production: JSON to stdout (Vercel logs pick this up)
    console.log(JSON.stringify({ ...entry, level }))
  }
}

/**
 * Log a chat interaction
 */
export function logChatInteraction(params: {
  clientId: string
  messageCount: number
  lastUserMessage?: string
  injectionDetected: boolean
  rateLimited: boolean
}): void {
  const entry: ChatLogEntry = {
    timestamp: new Date().toISOString(),
    type: "chat",
    clientId: params.clientId,
    messageCount: params.messageCount,
    lastUserMessage: params.lastUserMessage
      ? truncate(params.lastUserMessage)
      : undefined,
    injectionDetected: params.injectionDetected,
    rateLimited: params.rateLimited,
  }

  const level =
    params.injectionDetected || params.rateLimited ? "warn" : "info"
  log(entry, level)
}

/**
 * Log a job fit analysis request
 */
export function logJobFitInteraction(params: {
  clientId: string
  jobDescriptionLength: number
  injectionDetected: boolean
  rateLimited: boolean
}): void {
  const entry: JobFitLogEntry = {
    timestamp: new Date().toISOString(),
    type: "job-fit",
    clientId: params.clientId,
    jobDescriptionLength: params.jobDescriptionLength,
    injectionDetected: params.injectionDetected,
    rateLimited: params.rateLimited,
  }

  const level =
    params.injectionDetected || params.rateLimited ? "warn" : "info"
  log(entry, level)
}

/**
 * Log a security event
 */
export function logSecurityEvent(params: {
  event: "injection_attempt" | "rate_limit_exceeded" | "validation_failed"
  clientId: string
  details: string
}): void {
  const entry: SecurityLogEntry = {
    timestamp: new Date().toISOString(),
    type: "security",
    event: params.event,
    clientId: params.clientId,
    details: truncate(params.details, 200),
  }

  log(entry, "warn")
}
