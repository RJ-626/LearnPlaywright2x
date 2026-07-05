# Chapter 32: Playwright Fundamentals

This chapter covers the fundamentals of Playwright test automation with a properly configured TypeScript ESM project.

---

## Files

| File | Description |
|:---|:---|
| `.gitignore` | Playwright ignore patterns (node_modules, test-results, playwright-report, blob-report, cache, auth) |
| `package.json` | ESM module configuration with Playwright and Node.js type definitions |
| `package-lock.json` | Dependency lock file ensuring consistent installs |
| `playwright.config.ts` | Playwright test configuration (Chromium, HTML reporter, CI-aware settings) |
| `tsconfig.json` | Local TypeScript config extending workspace settings with `"types": ["node"]` |
| `tests/example.spec.ts` | Sample Playwright test verifying the TTACart page title |

---

## Setup

```bash
npm install
```

---

## Run Tests

```bash
# Run tests headless
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run tests with UI mode
npx playwright test --ui
```

---

## What Was Fixed

1. **`package.json`**
   - Changed `"type"` from `commonjs` to `module` to support ESM `import/export` syntax
   - Fixed `@types/node` from invalid `^26.1.0` to `^22.0.0`

2. **`playwright.config.ts`**
   - Replaced `workers: process.env.CI ? 1 : undefined` with `...(process.env.CI ? { workers: 1 } : {})` to satisfy `exactOptionalPropertyTypes`

3. **`tsconfig.json`** (new)
   - Extends workspace `tsconfig.json`
   - Overrides `"types": ["node"]` to resolve `process` global type errors

---

## Key Concepts

- Playwright project setup with ESM (`"type": "module"`)
- TypeScript strict-mode compatibility (`verbatimModuleSyntax`, `exactOptionalPropertyTypes`)
- Playwright test fixtures (`page`, `expect`)
- Browser automation with `page.goto()` and `expect(page).toHaveTitle()`
- Playwright HTML reporter and trace collection
- CI-aware configuration with `forbidOnly`, `retries`, and `workers`
