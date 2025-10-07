import { test, expect } from '@playwright/test'

test.describe('Projects', () => {
  test('displays list of projects', async ({ page }) => {
    await page.goto('/projects')
    
    // Check that projects are displayed
    await expect(page.locator('.grid').first()).toBeVisible()
    
    // Should have project cards
    const projectCards = page.locator('.pixel-card')
    await expect(projectCards.first()).toBeVisible()
  })

  test('filter functionality works', async ({ page }) => {
    await page.goto('/projects')
    
    // Click on Featured filter
    await page.click('text=Featured')
    
    // Wait for filtering
    await page.waitForTimeout(200)
    
    // Should see filtered message or filtered results
    const projectCards = page.locator('.pixel-card')
    const count = await projectCards.count()
    expect(count).toBeGreaterThan(0)
  })

  test('search functionality works', async ({ page }) => {
    await page.goto('/projects')
    
    // Enter search query
    const searchInput = page.locator('input[placeholder*="Search"]')
    await searchInput.fill('AI')
    
    // Wait for debounce
    await page.waitForTimeout(400)
    
    // Check that results are filtered
    await expect(page.locator('text=Found')).toBeVisible()
  })

  test('project cards display tech stack tags', async ({ page }) => {
    await page.goto('/projects')
    
    // Check for badge elements
    const badges = page.locator('.pixel-badge')
    await expect(badges.first()).toBeVisible()
  })
})
