
import { test, expect, Page } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await expect(page.getByRole('heading', { name: 'TTACart' })).toBeVisible();

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abc');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('ghty');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await page.getByRole('heading', { name: 'TTACart' }).click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
});