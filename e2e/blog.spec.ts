import { test, expect } from '@playwright/test'

test.describe('Blog', () => {
  test('displays list of blog posts', async ({ page }) => {
    await page.goto('/blog')
    
    // Check that posts are displayed
    await expect(page.locator('.grid').first()).toBeVisible()
    
    // Should have at least one post card
    const postCards = page.locator('a[href^="/blog/"]')
    await expect(postCards.first()).toBeVisible()
  })

  test('search functionality works', async ({ page }) => {
    await page.goto('/blog')
    
    // Enter search query
    const searchInput = page.locator('input[placeholder*="Search"]')
    await searchInput.fill('pixel')
    
    // Wait for debounce
    await page.waitForTimeout(400)
    
    // Check that results are filtered
    await expect(page.locator('text=Found')).toBeVisible()
  })

  test('clicking post navigates to detail page', async ({ page }) => {
    await page.goto('/blog')
    
    // Click first post
    await page.locator('a[href^="/blog/"]').first().click()
    
    // Should be on a post detail page
    await expect(page).toHaveURL(/\/blog\/.+/)
    
    // Should have back link
    await expect(page.locator('text=Back to Blog')).toBeVisible()
  })

  test('back to blog link works on post page', async ({ page }) => {
    await page.goto('/blog/pixel-perfect-design')
    
    await page.click('text=Back to Blog')
    await expect(page).toHaveURL('/blog')
  })
})
