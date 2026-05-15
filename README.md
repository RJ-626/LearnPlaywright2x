# LearnPlaywright2X

A comprehensive learning repository for **JavaScript fundamentals** and **Playwright automation testing** concepts. This project is organized into chapters covering everything from basic JavaScript syntax to advanced automation testing patterns.

---

## Table of Contents

- [About This Repository](#about-this-repository)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [How to Use](#how-to-use)
- [Chapters Overview](#chapters-overview)
  - [Chapter 01: Basics](#chapter-01-basics)
  - [Chapter 02: JavaScript Concepts](#chapter-02-javascript-concepts)
  - [Chapter 03: Identifiers & Literals](#chapter-03-identifiers--literals)
  - [Chapter 04: JavaScript Concepts - Variables, Functions & Scope](#chapter-04-javascript-concepts---variables-functions--scope)
- [Hoisting and Temporal Dead Zone (TDZ)](#hoisting-and-temporal-dead-zone-tdz)
- [VS Code Tips](#vs-code-tips)
- [Running the Code](#running-the-code)
- [Contributing](#contributing)

---

## About This Repository

This repository serves as a structured learning resource for:
- JavaScript programming fundamentals
- Naming conventions and best practices
- VS Code editor shortcuts and productivity tips
- Identifier rules, keywords, and literals in JavaScript
- Foundation concepts for Playwright test automation

Each chapter contains practical examples with VS Code-specific tips, keyboard shortcuts, and hands-on exercises.

---

## Repository Structure

```
LearnPlaywrightBasics2X/
├── chapter_01_Basics/                          # JavaScript Basics
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_Verify_Setup.js
│   └── 04_HotCode.js
│
├── chapter_02_Javascript_Concepts/             # JavaScript Core Concepts
│   └── 05_JS_Basics.js
│
├── chapter_03_identifier_Literals/             # Identifiers, Keywords & Literals
│   ├── 06_Identifiers_Rules.js
│   ├── 07_Identifiers_Part2.js
│   ├── 08_Comments.js
│   ├── js_identifier_rules.js
│   ├── vs_code_keyboard_shortcut_mac.md
│   └── vs_code_keyboard_shortcut_windows.md
│
├── chapter_04_Javascript_Concepts.js/          # Variables, Functions & Scope
│   ├── 09_var_let_const.js
│   ├── 10_functions.js
│   ├── 11_var_explained.js
│   ├── 12_let_explained.js
│   ├── 13_const_explained.js
│   ├── 14_var_functionscope.js
│   ├── 15_let_blockscope.js
│   ├── 16_Hoisting.js
│   └── 17_Hoisting_Functions.js
│
└── README.md                                   # This file
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [VS Code](https://code.visualstudio.com/) (recommended editor)
- Basic understanding of programming concepts

---

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RJ-626/LearnPlaywright2x.git
   cd LearnPlaywright2X
   ```

2. **Open in VS Code:**
   ```bash
   code .
   ```

3. **Run JavaScript files:**
   ```bash
   node filename.js
   ```

4. **Use VS Code Debugger:**
   - Press `F5` to start debugging
   - Press `F9` to toggle breakpoints
   - Press `F10` to step over, `F11` to step into

---

## Chapters Overview

### Chapter 01: Basics

**Files:** `chapter_01_Basics/`

Covers foundational JavaScript concepts:
- Variable declarations (`var`, `let`, `const`)
- Data types and type conversions
- Basic operators
- Console commands and debugging
- Essential JavaScript commands for daily use

**Key topics:**
- `01_Basics.js` - Core syntax fundamentals
- `02_JS.js` - JavaScript execution basics
- `03_JS_Verify_Setup.js` - Verify Node.js setup and environment
- `04_HotCode.js` - Commonly used code patterns

---

### Chapter 02: JavaScript Concepts

**File:** `chapter_02_Javascript_Concepts/05_JS_Basics.js`

Deep dive into JavaScript programming concepts:
- Variable scoping (global vs function vs block)
- Hoisting behavior
- Type coercion and truthy/falsy values
- Comparison operators (`==` vs `===`)
- Template literals and string interpolation
- Arrow functions and function expressions
- Array and object destructuring
- Spread and rest operators

---

### Chapter 03: Identifiers & Literals

**Files:** `chapter_03_identifier_Literals/`

Comprehensive coverage of JavaScript identifiers, naming conventions, keywords, and literals with VS Code integration.

#### 3.1 Identifier Rules
- **Files:** `06_Identifiers_Rules.js`, `js_identifier_rules.js`
- Valid identifier patterns
- Naming conventions (camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE)
- Reserved keywords restrictions
- Case-sensitivity rules
- Unicode support

#### 3.2 Identifiers Part 2
- **File:** `07_Identifiers_Part2.js`
- Extended identifier concepts and examples

#### 3.3 Comments
- **File:** `08_Comments.js`
- Single-line comments (`//`)
- Multi-line comments (`/* */`)
- JSDoc documentation comments
- VS Code comment/uncomment shortcuts

#### 3.4 VS Code Keyboard Shortcuts
- **Files:** `vs_code_keyboard_shortcut_mac.md`, `vs_code_keyboard_shortcut_windows.md`
- Complete keyboard shortcuts reference for both Mac and Windows
- General, editing, navigation, search shortcuts
- Multi-cursor, debugging, terminal shortcuts
- File and editor management shortcuts

---

### Chapter 04: JavaScript Concepts - Variables, Functions & Scope

**Files:** `chapter_04_Javascript_Concepts.js/`

Deep dive into JavaScript variables, functions, and scoping mechanisms:
- Variable declarations deep dive (`var`, `let`, `const`)
- Function declarations, expressions, and arrow functions
- Global scope, function scope, and block scope
- Hoisting behavior for variables and functions
- Practical examples and comparisons

**Key topics:**
- `09_var_let_const.js` - Overview of variable declarations
- `10_functions.js` - Functions in JavaScript
- `11_var_explained.js` - Deep dive into `var`
- `12_let_explained.js` - Understanding `let`
- `13_const_explained.js` - Understanding `const`
- `14_var_functionscope.js` - Function scope with `var`
- `15_let_blockscope.js` - Block scope with `let`
- `16_Hoisting.js` - Variable and function hoisting
- `17_Hoisting_Functions.js` - Function hoisting behavior

---

---

## Hoisting and Temporal Dead Zone (TDZ)

### What is Hoisting?

**Hoisting** is JavaScript's default behavior of moving **declarations** to the top of their containing scope during the compilation phase (before code execution).

> **Important:** Only declarations are hoisted, NOT initializations/assignments.

### `var` Hoisting

With `var`, the **declaration** is hoisted and initialized with `undefined`. The assignment stays at the original line.

```javascript
console.log(myVar); // Output: undefined (not an error!)
var myVar = 10;
console.log(myVar); // Output: 10
```

**What JavaScript sees internally:**
```javascript
var myVar;           // Declaration hoisted to top
console.log(myVar);   // undefined
myVar = 10;          // Assignment stays in place
console.log(myVar);   // 10
```

### `let` and `const` Hoisting + TDZ

`let` and `const` are **also hoisted**, but they enter the **Temporal Dead Zone (TDZ)**.

#### What is TDZ?

The **Temporal Dead Zone** is the period between when a variable is **hoisted** (enters scope) and when it is **declared/initialized**. During this time, the variable exists but **cannot be accessed**.

> Accessing a variable in the TDZ throws a `ReferenceError`.

```javascript
console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
```

### Comparison Table

| Feature | `var` | `let` | `const` |
|:---|:---|:---|:---|
| **Hoisted?** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Hoisted Value** | `undefined` | TDZ (uninitialized) | TDZ (uninitialized) |
| **Accessible before declaration?** | ✅ Yes (undefined) | ❌ No (ReferenceError) | ❌ No (ReferenceError) |
| **Scope** | Function scope | Block scope `{}` | Block scope `{}` |
| **Can redeclare?** | ✅ Yes | ❌ No | ❌ No |
| **Can reassign?** | ✅ Yes | ✅ Yes | ❌ No |
| **Must initialize?** | ❌ No | ❌ No | ✅ Yes |

### Function Hoisting

Function **declarations** are hoisted **completely** (both name and body).

```javascript
sayHello(); // ✅ "Hello!" - Works perfectly!

function sayHello() {
    console.log("Hello!");
}
```

**Function expressions are NOT hoisted the same way:**

```javascript
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
    console.log("Hi!");
};
```

### Best Practices

1. **Use `const` by default** — prevents accidental reassignment
2. **Use `let` when you need to reassign** — loops, counters, conditionals
3. **Avoid `var`** — to prevent hoisting confusion and function scope leaks
4. **Declare variables at the top of their scope** — makes hoisting explicit and avoids TDZ surprises
5. **Initialize variables when you declare them** — cleaner code, fewer bugs

---

## VS Code Tips

### Recommended Extensions
Install these extensions for the best experience:
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **JavaScript (ES6) code snippets** - Quick code generation
- **Path Intellisense** - Auto-complete file paths
- **GitLens** - Enhanced Git capabilities

### Essential Shortcuts for This Repo

| Shortcut | Action |
|:---|:---|
| `Ctrl + /` | Toggle line comment |
| `Shift + Alt + A` | Toggle block comment |
| ``Ctrl + ` `` | Open integrated terminal |
| `F5` | Start debugging |
| `F9` | Toggle breakpoint |
| `Ctrl + Space` | Trigger IntelliSense |
| `Shift + Alt + F` | Format document |
| `F2` | Rename symbol |
| `F12` | Go to definition |
| `Ctrl + D` | Select next occurrence |
| `Ctrl + Shift + L` | Select all occurrences |
| `Alt + Up/Down` | Move line up/down |

---

## Running the Code

### Run a Single File
```bash
node chapter_01_Basics/01_Basics.js
```

### Run with Debugging
1. Open the file in VS Code
2. Press `F9` on the line where you want to break
3. Press `F5` to start debugging
4. Use `F10` (step over) or `F11` (step into)

### Run Chapter 01 Files
```bash
node chapter_01_Basics/01_Basics.js
node chapter_01_Basics/02_JS.js
node chapter_01_Basics/03_JS_Verify_Setup.js
node chapter_01_Basics/04_HotCode.js
```

### Run Chapter 02 Files
```bash
node chapter_02_Javascript_Concepts/05_JS_Basics.js
```

### Run Chapter 03 Files
```bash
node chapter_03_identifier_Literals/06_Identifiers_Rules.js
node chapter_03_identifier_Literals/07_Identifiers_Part2.js
node chapter_03_identifier_Literals/08_Comments.js
node chapter_03_identifier_Literals/js_identifier_rules.js
```

### Run Chapter 04 Files
```bash
node chapter_04_Javascript_Concepts.js/09_var_let_const.js
node chapter_04_Javascript_Concepts.js/10_functions.js
node chapter_04_Javascript_Concepts.js/11_var_explained.js
node chapter_04_Javascript_Concepts.js/12_let_explained.js
node chapter_04_Javascript_Concepts.js/13_const_explained.js
node chapter_04_Javascript_Concepts.js/14_var_functionscope.js
node chapter_04_Javascript_Concepts.js/15_let_blockscope.js
node chapter_04_Javascript_Concepts.js/16_Hoisting.js
node chapter_04_Javascript_Concepts.js/17_Hoisting_Functions.js
```

---

## Topics Covered Summary

| Category | Topics |
|:---|:---|
| **Basics** | Variables, Data Types, Operators, Console |
| **Concepts** | Scope, Hoisting, Type Coercion, Comparisons |
| **Identifiers** | Rules, Conventions, Reserved Words |
| **Keywords** | JavaScript keywords with examples |
| **Literals** | String, Number, Boolean, Array, Object, Regex |
| **Variables & Functions** | var/let/const, Function scope, Block scope, Hoisting |
| **Hoisting & TDZ** | var/let/const hoisting, Temporal Dead Zone, Best practices |
| **VS Code** | Shortcuts, Debugging, IntelliSense, Snippets |
| **Best Practices** | Naming conventions, Code formatting |

---

## Contributing

Feel free to contribute to this learning repository:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-topic`)
3. Commit your changes (`git commit -am 'Add new topic'`)
4. Push to the branch (`git push origin feature/new-topic`)
5. Open a Pull Request

---

## License

This project is for educational purposes.

---

## Author

Created for learning JavaScript and Playwright automation testing basics.

**Happy Learning!**

---

*Last updated: May 15, 2026*
