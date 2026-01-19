import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"
import { getJobFitSystemPrompt } from "@/lib/ai/system-prompt"

export const maxDuration = 60

export async function POST(req: Request) {
  const { jobDescription } = await req.json()

  if (!jobDescription || typeof jobDescription !== "string") {
    return Response.json(
      { error: "Job description is required" },
      { status: 400 }
    )
  }

  const result = await generateText({
    model: openai("gpt-5.2-chat-latest"),
    system: getJobFitSystemPrompt(),
    prompt: `Please analyze the following job description and provide a fit assessment:

---
JOB DESCRIPTION:
${jobDescription}
---

Provide your analysis in the structured format specified.`,
  })

  return Response.json({ analysis: result.text })
}
