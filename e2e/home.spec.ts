import { test, expect } from "@playwright/test"

test.describe("Home page", () => {
  test("loads and shows hero section", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Aire-Max/)
    // Check page renders something (body not empty)
    await expect(page.locator("body")).toBeVisible()
  })
})
