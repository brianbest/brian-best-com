import { test, expect, type Page } from "@playwright/test"
import fs from "fs"
import path from "path"

// First blog post slug, read from the content directory so tests don't go
// stale when posts are added or renamed.
const firstSlug = fs
  .readdirSync(path.join(__dirname, "../content/blog"))
  .filter((f) => f.endsWith(".md"))
  .sort()
  .reverse()[0]
  .replace(/\.md$/, "")

const PAGES: { route: string; h1?: string; marker?: string }[] = [
  { route: "/", h1: "Brian Best" },
  { route: "/blog", h1: "~/writing" },
  { route: `/blog/${firstSlug}` },
  { route: "/projects", h1: "~/work" },
  { route: "/about", h1: "~/about" },
  { route: "/contact", h1: "Get in touch" },
  { route: "/chat", marker: "Ask about Brian" },
]

function collectConsoleErrors(page: Page): string[] {
  const errors: string[] = []
  page.on("console", (msg) => {
    if (msg.type() !== "error") return
    // Resource-load errors carry the failing URL in location, not the text.
    const url = msg.location().url
    if (url.includes("favicon")) return
    // Vercel Analytics' script only exists on Vercel deployments, not locally.
    if (url.includes("/_vercel/")) return
    errors.push(`${msg.text()}${url ? ` (${url})` : ""}`)
  })
  return errors
}

for (const { route, h1, marker } of PAGES) {
  test(`${route} renders in the Terminal Notebook design`, async ({ page }) => {
    const errors = collectConsoleErrors(page)

    const response = await page.goto(route)
    expect(response?.status()).toBe(200)

    if (h1) {
      await expect(page.locator("h1").first()).toContainText(h1)
    }
    if (marker) {
      await expect(page.getByText(marker).first()).toBeVisible()
    }

    // Global chrome: terminal nav brand + footer echo.
    await expect(page.getByText("brianbest.com").first()).toBeVisible()
    await expect(page.locator("footer")).toContainText("brian best")

    // No legacy Persona 5 styling may survive the redesign.
    const personaLeftovers = await page
      .locator('[class*="persona-"], .font-bungee, .shadow-thief, .pattern-mask')
      .count()
    expect(personaLeftovers).toBe(0)

    expect(errors).toEqual([])
  })
}
