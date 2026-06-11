import { test, expect } from "@playwright/test"

// AI SDK UI-message SSE stream — the minimal valid response for useChat().
const CHAT_STREAM = [
  '{"type":"start"}',
  '{"type":"text-start","id":"t1"}',
  '{"type":"text-delta","id":"t1","delta":"Mocked answer about Brian."}',
  '{"type":"text-end","id":"t1"}',
  '{"type":"finish"}',
  "[DONE]",
]
  .map((chunk) => `data: ${chunk}\n\n`)
  .join("")

const JOB_FIT_ANALYSIS = `**STRONG FIT**

Where Brian aligns:
- Mocked alignment point about agentic AI experience.

Worth flagging:
- Mocked flag about limited mobile experience.

Recommendation: reach out on LinkedIn.`

test.beforeEach(async ({ page }) => {
  await page.route("**/api/chat", (route) =>
    route.fulfill({
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "x-vercel-ai-ui-message-stream": "v1",
      },
      body: CHAT_STREAM,
    }),
  )
  await page.route("**/api/job-fit", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ analysis: JOB_FIT_ANALYSIS }),
    }),
  )
  await page.goto("/chat")
})

test("renders the chat experience with starter prompts", async ({ page }) => {
  await expect(
    page.getByPlaceholder("What would you like to know about Brian?"),
  ).toBeVisible()
  await expect(page.getByText("What languages does Brian work in?").first()).toBeVisible()
})

test("send is disabled with empty input and enabled after typing", async ({ page }) => {
  const send = page.getByRole("button", { name: /SEND/ }).first()
  await expect(send).toBeDisabled()

  await page
    .getByPlaceholder("What would you like to know about Brian?")
    .fill("What does Brian work on?")
  await expect(send).toBeEnabled()
})

test("submitting a question renders the user message and mocked answer", async ({ page }) => {
  const input = page.getByPlaceholder("What would you like to know about Brian?")
  await input.fill("What does Brian work on?")
  await input.press("Enter")

  await expect(page.getByText("What does Brian work on?").first()).toBeVisible()
  await expect(page.getByText("Mocked answer about Brian.").first()).toBeVisible()
})

test("clicking a starter prompt sends it as a message", async ({ page }) => {
  await page.getByText("What languages does Brian work in?").first().click()
  await expect(page.getByText("Mocked answer about Brian.").first()).toBeVisible()
})

test("JD mode analyzes a pasted job description", async ({ page }) => {
  await page.getByRole("button", { name: "Vet a job description" }).click()

  const jdInput = page.getByPlaceholder("Paste a job description…")
  await expect(jdInput).toBeVisible()

  await jdInput.fill(
    "Senior software engineer building agentic AI systems with TypeScript, Node.js, and LLM integrations for enterprise customers.",
  )
  await page.getByRole("button", { name: /SEND/ }).first().click()

  // The fit card derives a "STRONG MATCH" band label from the STRONG FIT phrase.
  await expect(page.getByText("STRONG MATCH").first()).toBeVisible()
  await expect(page.getByText(/Mocked alignment point/).first()).toBeVisible()
})
