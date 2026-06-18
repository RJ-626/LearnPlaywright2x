import { test, expect } from '@playwright/test';

//Page-inbuilt features (habits)- like fixtures

test("Verify that the title will be TTA Cart", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("TTACart - Login");
});

