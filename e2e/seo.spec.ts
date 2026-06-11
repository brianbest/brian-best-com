import { test, expect } from "@playwright/test"
import fs from "fs"
import path from "path"

const firstSlug = fs
  .readdirSync(path.join(__dirname, "../content/blog"))
  .filter((f) => f.endsWith(".md"))
  .sort()
  .reverse()[0]
  .replace(/\.md$/, "")

test("/job-fit permanently redirects to /chat", async ({ page }) => {
  const response = await page.request.fetch("/job-fit", { maxRedirects: 0 })
  expect(response.status()).toBe(308)
  expect(response.headers()["location"]).toContain("/chat")

  await page.goto("/job-fit")
  await expect(page).toHaveURL(/\/chat$/)
})

for (const route of ["/", `/blog/${firstSlug}`]) {
  test(`${route} exposes a working og:image`, async ({ page }) => {
    await page.goto(route)

    const ogImage = page.locator('meta[property="og:image"]')
    await expect(ogImage).toHaveCount(1)

    const imageUrl = await ogImage.getAttribute("content")
    expect(imageUrl).toBeTruthy()

    // metadataBase makes the og:image URL absolute (https://brianbest.com/...);
    // fetch its path against the server under test instead.
    const { pathname, search } = new URL(imageUrl as string)
    const imageResponse = await page.request.get(pathname + search)
    expect(imageResponse.status()).toBe(200)
    expect(imageResponse.headers()["content-type"]).toContain("image/png")
  })
}

test("sitemap.xml lists static routes and blog posts", async ({ request }) => {
  const response = await request.get("/sitemap.xml")
  expect(response.status()).toBe(200)

  const body = await response.text()
  expect(body).toContain("https://brianbest.com/about")
  expect(body).toContain(`https://brianbest.com/blog/${firstSlug}`)
  expect(body).not.toContain("/job-fit")
})

test("robots.txt allows crawling and points at the sitemap", async ({ request }) => {
  const response = await request.get("/robots.txt")
  expect(response.status()).toBe(200)

  const body = await response.text()
  expect(body).toContain("Disallow: /api/")
  expect(body).toContain("Sitemap: https://brianbest.com/sitemap.xml")
})

test("rss.xml is a valid feed with the latest post", async ({ request }) => {
  const response = await request.get("/rss.xml")
  expect(response.status()).toBe(200)
  expect(response.headers()["content-type"]).toContain("application/rss+xml")

  const body = await response.text()
  expect(body).toContain("<rss")
  expect(body).toContain(`/blog/${firstSlug}`)
})

test("llms-full.txt serves the whole site as plain text", async ({ request }) => {
  const response = await request.get("/llms-full.txt")
  expect(response.status()).toBe(200)

  const body = await response.text()
  expect(body).toContain("Career Profile")
  expect(body).toContain(`/blog/${firstSlug}`)
})

test("raw markdown endpoint serves post source", async ({ request }) => {
  const response = await request.get(`/api/posts/${firstSlug}/raw`)
  expect(response.status()).toBe(200)
  expect(response.headers()["content-type"]).toContain("text/markdown")
  expect(await response.text()).toContain("---")
})
