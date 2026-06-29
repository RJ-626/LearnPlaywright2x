# Understanding `default` Export vs Named (Non-Default) Export

This document explains the difference between `default` exports and named (non-default) exports using the actual code from the files in this project.

---

## 1. Named Exports (Non-Default)

Named exports allow you to export multiple values from a single file. When importing them, you **must use curly braces `{}`** and the **exact name** of the exported item (unless you use an alias).

### Example Source Files

**`utils.js`**
```javascript
export let Base_URL = "https://api.staging.com";

export function formatUpperCaseString(name) {
    return "TC_" + name.toUpperCase();
}
```

**`testutils.js`**
```javascript
export let Base_URL = "https://app.vwo.com";

export function formatTestName(name) {
    return name.toUpperCase();
}
```

### How to Import Named Exports

**File: `169_Utils.js`**
```javascript
import { Base_URL as bul_util, formatUpperCaseString } from "../utils.js";
import { Base_URL as bul_testtul, formatTestName } from "../testutils.js";

console.log(bul_util);
let res = formatUpperCaseString("Dashboard page");
console.log(res);

console.log(bul_testtul);
let result = formatTestName("login page");
console.log(result);
```

### Key Points for Named Exports
- Use the `export` keyword before the variable or function.
- You can have **multiple named exports** in a single file.
- During import, wrap the names inside `{}`.
- You can rename them using the `as` keyword (e.g., `Base_URL as bul_util`) to avoid naming conflicts.

---

## 2. Default Export

A module can have **only one `default` export**. It is typically used when a module exports a single primary functionality. When importing a default export, you **do not use curly braces**, and you can assign **any name** to it.

### Example Source File

**`logger.js`**
```javascript
export default function log(message) {   // default export
    console.log("[LOG] - default " + message);
}

export function log2(message) {
    console.log("[LOGS] " + message);
}
```

Notice that `logger.js` has:
1. One `export default function log(...)`
2. One additional named export `export function log2(...)`

### How to Import a Default Export

**File: `170_Loggers.js`**
```javascript
import log from '../logger.js';

log("Starting the Test cases");
```

### Key Points for Default Exports
- Use the `export default` keyword.
- A file can contain **only one** `export default`.
- During import, **do not use curly braces**.
- You can name the import whatever you want (e.g., `import myLogger from '../logger.js'` would also work perfectly).

---

## 3. Side-by-Side Comparison

| Feature | Named Export | Default Export |
|---------|-------------|----------------|
| Syntax | `export let foo = ...` | `export default function foo() {...}` |
| Number per file | Multiple allowed | Only **one** allowed |
| Import Syntax | `import { foo } from '...'` | `import foo from '...'` |
| Curly Braces | **Required** `{}` | **Not used** |
| Import Name | Must match export name (or use `as`) | Can be any valid identifier |

---

## 4. Practical Summary

- **Use named exports** when your file provides multiple utilities or values (like `utils.js` and `testutils.js`).
- **Use default exports** when your file primarily provides a single class or function (like `logger.js`).
- A single file can combine both: one `export default` plus any number of named `export` items.
