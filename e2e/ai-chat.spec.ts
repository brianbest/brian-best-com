import { test, expect } from "@playwright/test"

test.describe("AIChat Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("renders the chat component", async ({ page }) => {
    await expect(page.getByText("Ask AI About Me")).toBeVisible()
    await expect(page.getByPlaceholder("Ask me anything about my career...")).toBeVisible()
  })

  test("shows suggested questions", async ({ page }) => {
    await expect(page.getByRole("button", { name: "What is your leadership style?" })).toBeVisible()
    await expect(page.getByRole("button", { name: "What technologies are you most experienced with?" })).toBeVisible()
  })

  test("input field accepts keyboard input", async ({ page }) => {
    const input = page.getByPlaceholder("Ask me anything about my career...")

    // Click on the input to focus it
    await input.click()

    // Type in the input
    await input.fill("Hello world")

    // Verify the value
    await expect(input).toHaveValue("Hello world")
  })

  test("input field accepts typing character by character", async ({ page }) => {
    const input = page.getByPlaceholder("Ask me anything about my career...")

    await input.click()
    await page.keyboard.type("Test message", { delay: 50 })

    await expect(input).toHaveValue("Test message")
  })

  test("submit button is disabled when input is empty", async ({ page }) => {
    // The submit button has no accessible name, find it by type
    const submitButton = page.locator('button[type="submit"]')
    await expect(submitButton).toBeDisabled()
  })

  test("submit button is enabled when input has text", async ({ page }) => {
    const input = page.getByPlaceholder("Ask me anything about my career...")
    await input.fill("Test question")

    const submitButton = page.locator('button[type="submit"]')
    await expect(submitButton).toBeEnabled()
  })

  test("clicking suggested question triggers chat", async ({ page }) => {
    const suggestion = page.getByRole("button", { name: "What is your leadership style?" })
    await suggestion.click()

    // The user message should appear in the chat
    await expect(page.getByText("What is your leadership style?").first()).toBeVisible()

    // Suggested questions should be hidden after clicking
    await expect(page.getByRole("button", { name: "What is your leadership style?" })).not.toBeVisible()
  })

  test("can submit a message via button click", async ({ page }) => {
    const input = page.getByPlaceholder("Ask me anything about my career...")
    await input.fill("Tell me about your experience")

    const submitButton = page.locator('button[type="submit"]')
    await submitButton.click()

    // Input should be cleared after submission
    await expect(input).toHaveValue("")

    // Message should appear in chat
    await expect(page.getByText("Tell me about your experience")).toBeVisible()
  })

  test("can submit a message via Enter key", async ({ page }) => {
    const input = page.getByPlaceholder("Ask me anything about my career...")
    await input.fill("What are your skills?")
    await input.press("Enter")

    // Input should be cleared after submission
    await expect(input).toHaveValue("")

    // Message should appear in chat
    await expect(page.getByText("What are your skills?")).toBeVisible()
  })

  test("input is not blocked by overlays", async ({ page }) => {
    const input = page.getByPlaceholder("Ask me anything about my career...")

    // Check that the input is interactive
    await expect(input).toBeEnabled()

    // Try to focus and type
    await input.focus()
    const isFocused = await input.evaluate((el) => document.activeElement === el)
    expect(isFocused).toBe(true)
  })
})
