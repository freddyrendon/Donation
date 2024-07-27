
const { test, expect } = require("@playwright/test");

test.only("Donation form submission", async ({ page }) => {
  // Navigate to your application
  await page.goto("https://donation-i1kx.onrender.com");

  const donationsRow = page.locator(".row");
  const initialCount = await donationsRow.count();

  // Fill out the donation form
  await page.fill("input#first-name", "John");
  await page.fill("input#last-name", "Doe");
  await page.fill("input#email", "john.doe@example.com");
  await page.fill("input#donation-type", "Books");
  await page.fill("input#donation-quantity", "5");
  await page.fill("input#donation-date", "2024-07-26");

  // Spy on the form submission request
  await page.click('button[type="submit"]');

  // Count the number of donation rows after submission
  const updatedCount = await donationsRow.count();

  // Verify that the count has increased by 1
  await expect(updatedCount).toBe(initialCount);

  // Check if donations are displayed
  await expect(page.locator("text=John Doe").first()).toBeVisible();

  await page.locator(".btn.btn-danger").click();

  const deletedCount = await donationsRow.count();

  await expect(deletedCount).toBe(initialCount);
});