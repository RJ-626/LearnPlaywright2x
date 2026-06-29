# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Verify that the title will be TTA Cart
- Location: tests\example.spec.ts:5:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | //Page-inbuilt features (habits)- like fixtures
  4  | 
  5  | test("Verify that the title will be TTA Cart", async ({ page }) => {
> 6  |   await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
     |              ^ Error: page.goto: Target page, context or browser has been closed
  7  | 
  8  |   // Expect a title "to contain" a substring.
  9  |   await expect(page).toHaveTitle("TTACart - Login");
  10 | });
  11 | 
  12 | 
```