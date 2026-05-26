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
  - [Chapter 05: Literals](#chapter-05-literals)
  - [Chapter 06: Operators](#chapter-06-operators)
  - [Chapter 07: Statements](#chapter-07-statements)
  - [Chapter 08: Switch Statement](#chapter-08-switch-statement)
  - [Chapter 09: User Input](#chapter-09-user-input)
  - [Chapter 10: Loops](#chapter-10-loops)
  - [Chapter 11: Arrays](#chapter-11-arrays)
  - [Task Live Class](#task-live-class)
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
LearnPlaywright2x/
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
│   ├── 17_Hoisting_Functions.js
│   ├── 18_let_hoisting.js
│   ├── 19_let_hoisting_block.js
│   ├── 20_let_const_hoisting.js
│   └── 21_jr_QA.js
│
├── chapter_05_Literals/                        # JavaScript Literals
│   ├── 22_Literals.js
│   ├── 23_null_vs_undefined.js
│   ├── 24_Null.js
│   ├── 25_Literals_all_type.js
│   ├── 26_Literals_All_numbers.js
│   ├── 27_string_Literals.js
│   ├── 28_template_Literals.js
│   └── 29_backtick_single_double_quote.js
│
├── chapter_06_Operators/                       # JavaScript Operators
│   ├── 30_assignment_operators.js
│   ├── 31_arithmetic_operators.js
│   ├── 32_Modulus_operator.js
│   ├── 33_Exponential_operators.js
│   ├── 34_Interview_Ques.js
│   ├── 35_comparison_operator.js
│   ├── 36_Comparison_strict_loose.js
│   ├── 37_comparison_interview_ques.js
│   ├── 38_confusing_comparison.js
│   ├── 39_Logical_operators.js
│   ├── 40_string_concatenation.js
│   ├── 41_Terniary operator.js
│   ├── 42_Type_operator.js
│   ├── 43_Increament_decreament_operators.js
│   ├── 44_Null_operators.js
│   ├── 45_post_increament.js
│   └── 46_Interview_Ques_ince_decrement.js
│
├── chapter_07_Statements_IF and ELSE.js/       # JavaScript If/Else Statements
│   ├── 47_If_and_Else.js
│   ├── 48_If_elseif_else.js
│   ├── 49_Real_example_if_else.js
│   ├── 50_API_real_example_if_else.js
│   ├── 51_Interview_Ques_if_else.js
│   ├── 52_If_else_real_example.js
│   ├── 53_interview_Q.js
│   ├── 54_only_if.js
│   ├── 55_even_odd_ques.js
│   ├── 56_grade_calculator_ques.js
│   └── 57_Leap_Year_check_ques.js
│
├── chapter_08_Switch_statement/                # JavaScript Switch Statements
│   ├── 58_switch.js
│   ├── 59_No_break.js
│   ├── 60_Default.js
│   ├── 61_real_time_example.js
│   ├── 62_switch_group.js
│   ├── 63_interview_Ques.js
│   ├── 64_IQ_2.js
│   ├── 65_IQ_3.js
│   ├── 66_IQ_4.js
│   └── 67_IQ_5.js
│
├── chapter_09_user_input/                      # User Input in JavaScript
│   ├── 68_user_input.js
│   ├── 69_node_reading.js
│   └── 70_prompt_sync.js
│
├── chapter_10_Loops/                             # JavaScript Loops
│   ├── 71_For_loop.js
│   ├── 72_For_loop_example.js
│   ├── 73_For_loop_example_2.js
│   ├── 74_foor_loop_interview_ques.js
│   ├── 75_interview_ques_2.js
│   ├── 76_For_loop._in_off_each.js
│   ├── 77_While_loop.js
│   ├── 78_Do_while.js
│   ├── 79_Do_while_example.js
│   ├── 80_interview_ques.js
│   ├── 81_interview_ques.js
│   └── 82_IQ_ques.js
│
├── chapter_11_Arrays/                            # JavaScript Arrays
│   ├── 83_arrays.js
│   ├── 84_arrays-example.js
│   ├── 85_Arrays_create.js
│   ├── 86_Arrays_accessing.js
│   ├── 87_Arrays_add_remove.js
│   ├── 88_array_real_example.js
│   ├── 89_array_searching.js
│   ├── 90_array_iterate.js
│   └── 91_Arrays_transform.js
│
├── Task_Live_Class/                            # Live Class Tasks & Assignments
│   ├── 01_Task_29th_April.js
│   ├── 02_Task_04th_May.js
│   ├── 03_Task_08th_May.js
│   ├── 04_Task_11th_May.js
│   ├── 05_Task_13th_May.js
│   ├── 06_Task_15th_May.js
│   ├── 07_Task_18th_May.js
│   └── 08_Task_Live_20th May.js
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
- `18_let_hoisting.js` - `let` hoisting behavior
- `19_let_hoisting_block.js` - Block-level `let` hoisting
- `20_let_const_hoisting.js` - `let` and `const` hoisting comparison
- `21_jr_QA.js` - Junior QA interview questions and exercises

---

### Chapter 05: Literals

**Files:** `chapter_05_Literals/`

Comprehensive coverage of JavaScript literals and special values:
- **22_Literals.js** - Introduction to literals in JavaScript
- **23_null_vs_undefined.js** - Differences between `null` and `undefined`
- **24_Null.js** - Deep dive into `null`
- **25_Literals_all_type.js** - All types of literals
- **26_Literals_All_numbers.js** - Number literals and formats
- **27_string_Literals.js** - String literals and escaping
- **28_template_Literals.js** - Template literals and interpolation
- **29_backtick_single_double_quote.js** - Backticks vs quotes comparison

---

### Chapter 06: Operators

**Files:** `chapter_06_Operators/`

Complete guide to JavaScript operators with practical examples and interview questions:
- **30_assignment_operators.js** - Assignment operators (`=`, `+=`, `-=`, etc.)
- **31_arithmetic_operators.js** - Arithmetic operators (`+`, `-`, `*`, `/`)
- **32_Modulus_operator.js** - Modulus (`%`) operator
- **33_Exponential_operators.js** - Exponentiation (`**`) operator
- **34_Interview_Ques.js** - Operator-related interview questions
- **35_comparison_operator.js** - Comparison operators (`>`, `<`, `>=`, `<=`)
- **36_Comparison_strict_loose.js** - Strict (`===`) vs loose (`==`) equality
- **37_comparison_interview_ques.js** - Comparison interview questions
- **38_confusing_comparison.js** - Tricky comparison scenarios
- **39_Logical_operators.js** - Logical operators (`&&`, `||`, `!`)
- **40_string_concatenation.js** - String concatenation with `+`
- **41_Terniary operator.js** - Ternary/conditional operator
- **42_Type_operator.js** - `typeof` and `instanceof` operators
- **43_Increament_decreament_operators.js** - Increment and decrement operators
- **44_Null_operators.js** - Nullish coalescing (`??`) and optional chaining
- **45_post_increament.js** - Post-increment vs pre-increment
- **46_Interview_Ques_ince_decrement.js** - Increment/decrement interview questions

---

### Chapter 07: Statements

**Files:** `chapter_07_Statements_IF and ELSE.js/`

Comprehensive coverage of JavaScript conditional statements using `if`, `else if`, and `else`:
- **47_If_and_Else.js** - Basic if/else syntax and flow
- **48_If_elseif_else.js** - Multiple conditions with else-if ladder
- **49_Real_example_if_else.js** - Real-world if/else examples
- **50_API_real_example_if_else.js** - API-related conditional examples
- **51_Interview_Ques_if_else.js** - Interview questions on if/else
- **52_If_else_real_example.js** - More real-life if/else scenarios
- **53_interview_Q.js** - Additional interview questions
- **54_only_if.js** - Using standalone `if` statements
- **55_even_odd_ques.js** - Even/odd checker exercise
- **56_grade_calculator_ques.js** - Grade calculator exercise
- **57_Leap_Year_check_ques.js** - Leap year checker exercise

---

### Chapter 08: Switch Statement

**Files:** `chapter_08_Switch_statement/`

Complete guide to JavaScript `switch` statements with examples and interview questions:
- **58_switch.js** - Introduction to switch statements
- **59_No_break.js** - Switch cases without break (fall-through behavior)
- **60_Default.js** - Using default cases
- **61_real_time_example.js** - Real-world switch examples
- **62_switch_group.js** - Grouping multiple cases
- **63_interview_Ques.js** - Switch statement interview questions
- **64_IQ_2.js** - Interview question set 2
- **65_IQ_3.js** - Interview question set 3
- **66_IQ_4.js** - Interview question set 4
- **67_IQ_5.js** - Interview question set 5

---

### Chapter 09: User Input

**Files:** `chapter_09_user_input/`

Handling user input in JavaScript and Node.js:
- **68_user_input.js** - Basics of capturing user input
- **69_node_reading.js** - Reading input in Node.js
- **70_prompt_sync.js** - Using prompt-sync for synchronous input

---

### Chapter 10: Loops

**Files:** `chapter_10_Loops/`

Complete guide to JavaScript loops with practical examples and interview questions:
- **71_For_loop.js** - Introduction to `for` loops
- **72_For_loop_example.js** - `for` loop practical examples
- **73_For_loop_example_2.js** - More `for` loop examples
- **74_foor_loop_interview_ques.js** - `for` loop interview questions
- **75_interview_ques_2.js** - Additional loop interview questions
- **76_For_loop._in_off_each.js** - `for...in`, `for...of`, and `forEach` loops
- **77_While_loop.js** - `while` loop basics
- **78_Do_while.js** - `do...while` loop basics
- **79_Do_while_example.js** - `do...while` practical examples
- **80_interview_ques.js** - Loop-related interview questions
- **81_interview_ques.js** - More loop interview questions
- **82_IQ_ques.js** - IQ questions on loops

---

### Chapter 11: Arrays

**Files:** `chapter_11_Arrays/`

Complete guide to JavaScript arrays with practical examples:
- **83_arrays.js** - Introduction to arrays
- **84_arrays-example.js** - Array practical examples
- **85_Arrays_create.js** - Creating arrays in JavaScript
- **86_Arrays_accessing.js** - Accessing array elements
- **87_Arrays_add_remove.js** - Adding and removing elements
- **88_array_real_example.js** - Real-world array examples
- **89_array_searching.js** - Searching arrays
- **90_array_iterate.js** - Iterating over arrays
- **91_Arrays_transform.js** - Transforming arrays

---

### Task Live Class

**Files:** `Task_Live_Class/`

Hands-on tasks and assignments from live learning sessions:
- **01_Task_29th_April.js** - Task from 29th April session
- **02_Task_04th_May.js** - Task from 4th May session
- **03_Task_08th_May.js** - Task from 8th May session
- **04_Task_11th_May.js** - Task from 11th May session
- **05_Task_13th_May.js** - Task from 13th May session
- **06_Task_15th_May.js** - Task from 15th May session
- **07_Task_18th_May.js** - Task from 18th May session
- **08_Task_Live_20th May.js** - Task from 20th May live session

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
node chapter_04_Javascript_Concepts.js/18_let_hoisting.js
node chapter_04_Javascript_Concepts.js/19_let_hoisting_block.js
node chapter_04_Javascript_Concepts.js/20_let_const_hoisting.js
node chapter_04_Javascript_Concepts.js/21_jr_QA.js
```

### Run Chapter 05 Files
```bash
node chapter_05_Literals/22_Literals.js
node chapter_05_Literals/23_null_vs_undefined.js
node chapter_05_Literals/24_Null.js
node chapter_05_Literals/25_Literals_all_type.js
node chapter_05_Literals/26_Literals_All_numbers.js
node chapter_05_Literals/27_string_Literals.js
node chapter_05_Literals/28_template_Literals.js
node chapter_05_Literals/29_backtick_single_double_quote.js
```

### Run Chapter 06 Files
```bash
node chapter_06_Operators/30_assignment_operators.js
node chapter_06_Operators/31_arithmetic_operators.js
node chapter_06_Operators/32_Modulus_operator.js
node chapter_06_Operators/33_Exponential_operators.js
node chapter_06_Operators/34_Interview_Ques.js
node chapter_06_Operators/35_comparison_operator.js
node chapter_06_Operators/36_Comparison_strict_loose.js
node chapter_06_Operators/37_comparison_interview_ques.js
node chapter_06_Operators/38_confusing_comparison.js
node chapter_06_Operators/39_Logical_operators.js
node chapter_06_Operators/40_string_concatenation.js
node "chapter_06_Operators/41_Terniary operator.js"
node chapter_06_Operators/42_Type_operator.js
node chapter_06_Operators/43_Increament_decreament_operators.js
node chapter_06_Operators/44_Null_operators.js
node chapter_06_Operators/45_post_increament.js
node chapter_06_Operators/46_Interview_Ques_ince_decrement.js
```

### Run Chapter 07 Files
```bash
node "chapter_07_Statements_IF and ELSE.js/47_If_and_Else.js"
node "chapter_07_Statements_IF and ELSE.js/48_If_elseif_else.js"
node "chapter_07_Statements_IF and ELSE.js/49_Real_example_if_else.js"
node "chapter_07_Statements_IF and ELSE.js/50_API_real_example_if_else.js"
node "chapter_07_Statements_IF and ELSE.js/51_Interview_Ques_if_else.js"
node "chapter_07_Statements_IF and ELSE.js/52_If_else_real_example.js"
node "chapter_07_Statements_IF and ELSE.js/53_interview_Q.js"
node "chapter_07_Statements_IF and ELSE.js/54_only_if.js"
node "chapter_07_Statements_IF and ELSE.js/55_even_odd_ques.js"
node "chapter_07_Statements_IF and ELSE.js/56_grade_calculator_ques.js"
node "chapter_07_Statements_IF and ELSE.js/57_Leap_Year_check_ques.js"
```

### Run Chapter 08 Files
```bash
node chapter_08_Switch_statement/58_switch.js
node chapter_08_Switch_statement/59_No_break.js
node chapter_08_Switch_statement/60_Default.js
node chapter_08_Switch_statement/61_real_time_example.js
node chapter_08_Switch_statement/62_switch_group.js
node chapter_08_Switch_statement/63_interview_Ques.js
node chapter_08_Switch_statement/64_IQ_2.js
node chapter_08_Switch_statement/65_IQ_3.js
node chapter_08_Switch_statement/66_IQ_4.js
node chapter_08_Switch_statement/67_IQ_5.js
```

### Run Chapter 09 Files
```bash
node chapter_09_user_input/68_user_input.js
node chapter_09_user_input/69_node_reading.js
node chapter_09_user_input/70_prompt_sync.js
```

### Run Chapter 10 Files
```bash
node chapter_10_Loops/71_For_loop.js
node chapter_10_Loops/72_For_loop_example.js
node chapter_10_Loops/73_For_loop_example_2.js
node chapter_10_Loops/74_foor_loop_interview_ques.js
node chapter_10_Loops/75_interview_ques_2.js
node chapter_10_Loops/76_For_loop._in_off_each.js
node chapter_10_Loops/77_While_loop.js
node chapter_10_Loops/78_Do_while.js
node chapter_10_Loops/79_Do_while_example.js
node chapter_10_Loops/80_interview_ques.js
node chapter_10_Loops/81_interview_ques.js
node chapter_10_Loops/82_IQ_ques.js
```

### Run Chapter 11 Files
```bash
node chapter_11_Arrays/83_arrays.js
node chapter_11_Arrays/84_arrays-example.js
node chapter_11_Arrays/85_Arrays_create.js
node chapter_11_Arrays/86_Arrays_accessing.js
node chapter_11_Arrays/87_Arrays_add_remove.js
node chapter_11_Arrays/88_array_real_example.js
node chapter_11_Arrays/89_array_searching.js
node chapter_11_Arrays/90_array_iterate.js
node chapter_11_Arrays/91_Arrays_transform.js
```

### Run Task Live Class Files
```bash
node Task_Live_Class/01_Task_29th_April.js
node Task_Live_Class/02_Task_04th_May.js
node Task_Live_Class/03_Task_08th_May.js
node Task_Live_Class/04_Task_11th_May.js
node Task_Live_Class/05_Task_13th_May.js
node Task_Live_Class/06_Task_15th_May.js
node Task_Live_Class/07_Task_18th_May.js
node "Task_Live_Class/08_Task_Live_20th May.js"
```

---

## Topics Covered Summary

| Category | Topics |
|:---|:---|
| **Basics** | Variables, Data Types, Operators, Console |
| **Concepts** | Scope, Hoisting, Type Coercion, Comparisons |
| **Identifiers** | Rules, Conventions, Reserved Words |
| **Keywords** | JavaScript keywords with examples |
| **Literals** | String, Number, Boolean, Array, Object, Regex, Template Literals, Null vs Undefined |
| **Variables & Functions** | var/let/const, Function scope, Block scope, Hoisting |
| **Hoisting & TDZ** | var/let/const hoisting, Temporal Dead Zone, Best practices |
| **Operators** | Arithmetic, Assignment, Comparison, Logical, Ternary, Type, Nullish Coalescing |
| **If/Else Statements** | Conditional logic, real-world examples, interview questions |
| **Switch Statements** | Switch cases, fall-through, grouping, default, interview questions |
| **User Input** | Capturing input in Node.js, prompt-sync |
| **Arrays** | Creating, accessing, adding/removing, searching, iterating, transforming |
| **Loops** | `for`, `while`, `do...while`, `for...in`, `for...of`, `forEach`, interview questions |
| **Live Tasks** | Hands-on assignments from live sessions |
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

*Last updated: May 26, 2026*
