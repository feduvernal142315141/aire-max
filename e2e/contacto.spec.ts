import { test, expect } from "@playwright/test"

test.describe("Contacto page", () => {
  test("renders contact form", async ({ page }) => {
    await page.goto("/contacto")
    await expect(page.locator("body")).toBeVisible()
  })
})
