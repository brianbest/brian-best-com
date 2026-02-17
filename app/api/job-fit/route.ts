import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"
import { getJobFitSystemPrompt } from "@/lib/ai/system-prompt"
import { validateJobDescription } from "@/lib/ai/validation"
import {
  checkRateLimit,
  getClientIdentifier,
  getRateLimitHeaders,
} from "@/lib/ai/rate-limit"
import {
  logJobFitInteraction,
  logSecurityEvent,
} from "@/lib/ai/logging"
import { persistInteraction } from "@/lib/ai/interaction-store"

export const maxDuration = 60
const JOB_FIT_MODEL = "gpt-4.1-2025-04-14"

export async function POST(req: Request) {
  const clientId = getClientIdentifier(req)
  let jobDescriptionForLogging: string | undefined
  let injectionDetected = false

  // Check rate limit (more restrictive for job fit)
  const rateLimitResult = checkRateLimit(clientId, "jobFit")

  if (!rateLimitResult.allowed) {
    logSecurityEvent({
      event: "rate_limit_exceeded",
      clientId,
      details: "Job fit rate limit exceeded",
    })

    return Response.json(
      { error: "Too many requests. Please wait before analyzing another job." },
      {
        status: 429,
        headers: getRateLimitHeaders(rateLimitResult),
      }
    )
  }

  try {
    const body = await req.json()

    // Validate input
    const validation = validateJobDescription(body)

    if (!validation.valid) {
      logSecurityEvent({
        event: "validation_failed",
        clientId,
        details: validation.error || "Invalid job description",
      })

      return Response.json(
        { error: validation.error || "Job description is required" },
        { status: 400 }
      )
    }

    // Log injection attempt if detected (but still process - prompt handles it)
    if (validation.injectionDetected) {
      logSecurityEvent({
        event: "injection_attempt",
        clientId,
        details: "Potential injection attempt detected in job description",
      })
    }

    const jobDescription = validation.sanitized ?? body.jobDescription
    jobDescriptionForLogging = jobDescription
    injectionDetected = validation.injectionDetected || false

    // Log the interaction
    logJobFitInteraction({
      clientId,
      jobDescriptionLength: jobDescription.length,
      injectionDetected,
      rateLimited: false,
    })

    const result = await generateText({
      model: openai(JOB_FIT_MODEL),
      system: getJobFitSystemPrompt(),
      prompt: `Please analyze the following job description and provide a fit assessment:

---
JOB DESCRIPTION:
${jobDescription}
---

Provide your analysis in the structured format specified.`,
    })

    await persistInteraction({
      endpoint: "job_fit",
      status: "success",
      clientId,
      model: JOB_FIT_MODEL,
      requestText: jobDescription,
      responseText: result.text,
      requestPayload: { jobDescription },
      responsePayload: { analysis: result.text },
      injectionDetected,
    })

    return Response.json(
      { analysis: result.text },
      { headers: getRateLimitHeaders(rateLimitResult) }
    )
  } catch (error) {
    console.error("Job fit request error:", error)
    await persistInteraction({
      endpoint: "job_fit",
      status: "error",
      clientId,
      model: JOB_FIT_MODEL,
      requestText: jobDescriptionForLogging,
      requestPayload: jobDescriptionForLogging
        ? { jobDescription: jobDescriptionForLogging }
        : undefined,
      injectionDetected,
      errorMessage: error instanceof Error ? error.message : "Invalid request",
    })
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }
}
