/**
 * In-memory rate limiter for AI endpoints
 * Note: This is per-instance. For production with multiple instances,
 * consider using Redis or a distributed rate limiter.
 */

export interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxRequests: number // Maximum requests per window
}

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetIn: number // milliseconds until reset
}

interface RateLimitEntry {
  count: number
  windowStart: number
}

// Rate limit configurations for different endpoints
export const RATE_LIMITS = {
  chat: {
    windowMs: 60000, // 1 minute
    maxRequests: 20, // 20 requests per minute
  },
  jobFit: {
    windowMs: 300000, // 5 minutes
    maxRequests: 5, // 5 requests per 5 minutes
  },
} as const

// In-memory store for rate limiting
// Maps identifier -> endpoint -> entry
const rateLimitStore = new Map<string, Map<string, RateLimitEntry>>()

// Cleanup old entries periodically to prevent memory leaks
const CLEANUP_INTERVAL = 60000 // 1 minute
let lastCleanup = Date.now()

function cleanup(): void {
  const now = Date.now()

  // Only run cleanup every CLEANUP_INTERVAL
  if (now - lastCleanup < CLEANUP_INTERVAL) {
    return
  }

  lastCleanup = now

  // Remove expired entries
  const identifiers = Array.from(rateLimitStore.entries())
  for (const [identifier, endpoints] of identifiers) {
    const endpointEntries = Array.from(endpoints.entries())
    for (const [endpoint, entry] of endpointEntries) {
      const maxWindow = Math.max(RATE_LIMITS.chat.windowMs, RATE_LIMITS.jobFit.windowMs)
      if (now - entry.windowStart > maxWindow) {
        endpoints.delete(endpoint)
      }
    }

    // Remove identifier if no endpoints remain
    if (endpoints.size === 0) {
      rateLimitStore.delete(identifier)
    }
  }
}

/**
 * Check and update rate limit for an identifier
 */
export function checkRateLimit(
  identifier: string,
  endpoint: "chat" | "jobFit"
): RateLimitResult {
  cleanup()

  const config = RATE_LIMITS[endpoint]
  const now = Date.now()

  // Get or create entry for this identifier
  if (!rateLimitStore.has(identifier)) {
    rateLimitStore.set(identifier, new Map())
  }

  const endpointMap = rateLimitStore.get(identifier)!

  if (!endpointMap.has(endpoint)) {
    // First request - allow it
    endpointMap.set(endpoint, {
      count: 1,
      windowStart: now,
    })

    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetIn: config.windowMs,
    }
  }

  const entry = endpointMap.get(endpoint)!

  // Check if window has expired
  if (now - entry.windowStart >= config.windowMs) {
    // Reset window
    entry.count = 1
    entry.windowStart = now

    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetIn: config.windowMs,
    }
  }

  // Window still active - check count
  const resetIn = config.windowMs - (now - entry.windowStart)

  if (entry.count >= config.maxRequests) {
    // Rate limited
    return {
      allowed: false,
      remaining: 0,
      resetIn,
    }
  }

  // Increment and allow
  entry.count++

  return {
    allowed: true,
    remaining: config.maxRequests - entry.count,
    resetIn,
  }
}

/**
 * Get a stable identifier from a request for rate limiting
 * Uses IP address with fallbacks
 */
export function getClientIdentifier(request: Request): string {
  // Try various headers for the real IP
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    // Take the first IP in the chain (original client)
    const ip = forwardedFor.split(",")[0]?.trim()
    if (ip) return ip
  }

  const realIp = request.headers.get("x-real-ip")
  if (realIp) return realIp

  // Vercel-specific header
  const vercelIp = request.headers.get("x-vercel-forwarded-for")
  if (vercelIp) {
    const ip = vercelIp.split(",")[0]?.trim()
    if (ip) return ip
  }

  // Fallback - use a hash of user agent + some headers as a rough identifier
  // This is not ideal but provides some protection
  const userAgent = request.headers.get("user-agent") || "unknown"
  const acceptLang = request.headers.get("accept-language") || "unknown"

  return `fallback-${hashString(userAgent + acceptLang)}`
}

/**
 * Simple string hash function
 */
function hashString(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36)
}

/**
 * Format rate limit headers for response
 */
export function getRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    "X-RateLimit-Remaining": result.remaining.toString(),
    "X-RateLimit-Reset": Math.ceil(result.resetIn / 1000).toString(),
  }
}
