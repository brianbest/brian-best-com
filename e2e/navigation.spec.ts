import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('user can navigate through all main pages', async ({ page }) => {
    // Start at home page
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Brian Best')
    
    // Navigate to About
    await page.click('text=About')
    await expect(page).toHaveURL('/about')
    await expect(page.locator('h1')).toContainText('About Me')
    
    // Navigate to Blog
    await page.click('text=Blog')
    await expect(page).toHaveURL('/blog')
    await expect(page.locator('h1')).toContainText('Blog')
    
    // Navigate to Projects
    await page.click('text=Projects')
    await expect(page).toHaveURL('/projects')
    await expect(page.locator('h1')).toContainText('Projects')
    
    // Navigate to Now
    await page.click('text=Now')
    await expect(page).toHaveURL('/now')
    await expect(page.locator('h1')).toContainText('Now')
    
    // Navigate to Uses
    await page.click('text=Uses')
    await expect(page).toHaveURL('/uses')
    await expect(page.locator('h1')).toContainText('Uses')
    
    // Navigate to Contact
    await page.click('text=Contact')
    await expect(page).toHaveURL('/contact')
    await expect(page.locator('h1')).toContainText('Get In Touch')
  })

  test('clicking logo returns to home page', async ({ page }) => {
    await page.goto('/about')
    await page.click('text=Brian Best')
    await expect(page).toHaveURL('/')
  })

  test('mobile navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Open mobile menu
    await page.click('[aria-label="Open menu"]')
    
    // Check if menu is visible
    await expect(page.locator('nav').last()).toBeVisible()
    
    // Navigate to a page
    await page.click('text=Projects')
    await expect(page).toHaveURL('/projects')
  })
})
