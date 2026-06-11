import { test, expect } from "@playwright/test"

test.describe("command palette", () => {
  test("opens with Ctrl+K and fuzzy-finds pages", async ({ page }) => {
    await page.goto("/")
    await page.keyboard.press("Control+k")

    const dialog = page.getByRole("dialog", { name: "Command palette" })
    await expect(dialog).toBeVisible()

    await page.keyboard.type("writ")
    await expect(dialog.getByText("~/writing")).toBeVisible()
    await page.keyboard.press("Enter")
    await expect(page).toHaveURL(/\/blog$/)
  })

  test("runs shell commands with scrollback", async ({ page }) => {
    await page.goto("/")
    await page.keyboard.press("Control+k")

    await page.keyboard.type("whoami")
    await page.keyboard.press("Enter")
    await expect(
      page.getByText("brian best — principal software developer").first(),
    ).toBeVisible()

    await page.keyboard.type("help")
    await page.keyboard.press("Enter")
    await expect(page.getByText("available commands:")).toBeVisible()
  })

  test("sudo hire-brian opens the contact page", async ({ page }) => {
    await page.goto("/")
    await page.keyboard.press("Control+k")

    await page.keyboard.type("sudo hire-brian")
    await page.keyboard.press("Enter")
    await expect(page.getByText("access granted ✓")).toBeVisible()
    await expect(page).toHaveURL(/\/contact$/, { timeout: 5000 })
  })

  test("closes with Escape", async ({ page }) => {
    await page.goto("/")
    await page.keyboard.press("Control+k")
    await expect(page.getByRole("dialog", { name: "Command palette" })).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(page.getByRole("dialog", { name: "Command palette" })).toBeHidden()
  })

  test("opens from the nav chip and the blog search box", async ({ page }) => {
    await page.goto("/blog")
    await page.getByRole("button", { name: "Open command palette" }).click()
    await expect(page.getByRole("dialog", { name: "Command palette" })).toBeVisible()
    await page.keyboard.press("Escape")

    await page.getByText("fuzzy-find...").click()
    await expect(page.getByRole("dialog", { name: "Command palette" })).toBeVisible()
  })
})

test.describe("blog keyboard navigation", () => {
  test("j/k moves focus and Enter opens the focused post", async ({ page }) => {
    await page.goto("/blog")

    await page.keyboard.press("j")
    await page.keyboard.press("j")
    await page.keyboard.press("k")
    await page.keyboard.press("Enter")

    await expect(page).toHaveURL(/\/blog\/.+/)
  })
})

test.describe("404 page", () => {
  test("renders the terminal not-found page with route listing", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist")
    expect(response?.status()).toBe(404)

    await expect(page.getByText("No such file or directory")).toBeVisible()
    await expect(page.locator("h1")).toContainText("404")
    await expect(page.getByRole("link", { name: "writing/", exact: true })).toBeVisible()
  })
})
