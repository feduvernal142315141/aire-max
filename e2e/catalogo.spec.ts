import { test, expect } from "@playwright/test"

test.describe("Catálogo page", () => {
  test("loads and shows products", async ({ page }) => {
    await page.goto("/catalogo")
    await expect(page).toHaveTitle(/Aire-Max/)
    await expect(page.locator("body")).toBeVisible()
  })
})
