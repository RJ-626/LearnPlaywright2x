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
  - [Chapter 12: Functions](#chapter-12-functions)
  - [Chapter 13: Strings](#chapter-13-strings)
  - [Chapter 14: Objects](#chapter-14-objects)
  - [Chapter 15: 2D Arrays](#chapter-15-2d-arrays)
  - [Chapter 16: Callbacks](#chapter-16-callbacks)
  - [Chapter 17: Promises](#chapter-17-promises)
  - [Chapter 18: Async/Await](#chapter-18-asyncawait)
  - [Chapter 19: Playwright Basics](#chapter-19-playwright-basics)
  - [Chapter 20: OOP Basics](#chapter-20-oop-basics)
  - [Task Live Class](#task-live-class)
  - [Interview Questions](#interview-questions)
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
│   ├── 91_Arrays_transform.js
│   ├── 92_arrays_sort.js
│   ├── 93_array_slicing.js
│   ├── 94_arrays_concat.js
│   └── 95_arrays_checking.js
│
├── chapter_12_Functions/                         # JavaScript Functions
│   ├── 96_function.js
│   ├── 97_function_type1.js
│   ├── 98_function_type2.js
│   ├── 99_function_type3.js
│   ├── 100_function_type4.js
│   ├── 101_functionwithtemperalliteral.js
│   ├── 102_function_expression.js
│   ├── 103_arrow_function.js
│   ├── 104_arrow_fn_real_example.js
│   ├── 105_IIFE.js
│   ├── 106_Default_param_fn.js
│   ├── 107_IQ.js
│   ├── 108_Rest_param_fn.js
│   ├── 109_Interview_Q.js
│   ├── 110_spread_IQ.js
│   ├── 111_Scope_IO.js
│   ├── 112_IQ.js
│   ├── 113_closure.js
│   ├── 114_closure_example.js
│   ├── 115_API_real_ex_closure.js
│   ├── 116_higher_order_fn.js
│   └── 117_Pure_function.js
│
├── chapter_13_strings/                           # JavaScript Strings
│   ├── 118_strings.js
│   ├── 119_string_properties.js
│   ├── 120_strings_search.js
│   ├── 121_substring.js
│   ├── 122_String_Transform.js
│   ├── 123_String_conversion.js
│   └── javascript_string_cheatsheet.md
│
├── chapter_14_objects/                         # JavaScript Objects
│   ├── 124_objects.js
│   ├── 125_objects_example.js
│   ├── 126_obj_creation.js
│   ├── 127_obj_real_example.js
│   ├── 128_obj_premitivevsREfrence.js
│   ├── 129_obj_example.js
│   ├── 130_Interview_Ques.js
│   ├── 131_obj_with_functions.js
│   ├── 132_object_deconstruction.js
│   ├── 133_obj.spread.js
│   ├── 134_obj_get_set_method.js
│   ├── 135_Interview_Ques.js
│   ├── 136_obj_real.js
│   └── 137_const_vs_let.js
│
├── chapter_15_2D_array/                        # JavaScript 2D Arrays
│   ├── 138_2D_array.js
│   ├── 139_2d_array_example.js
│   ├── 140_2D_array_real_example.js
│   ├── 141_2D_array_function.js
│   └── 142_IQ_right_pyramid_pattern.js
│
├── chapter_16_callback/                        # Callbacks & Callback Hell
│   ├── 150_callback_hell.js
│   └── 151_callback_hell_of_DOM.js
│
├── chapter_17_Promise/                           # JavaScript Promises
│   ├── 154_promise.js
│   ├── 155_Promise_real_example_API.js
│   ├── 156_promise_real_example_API_2.js
│   ├── 157_finally.js
│   ├── 158_callback_pyramid_problem.js
│   ├── 159_promise.all.js
│   └── 160_IQ.js
│
├── chapter_18_Async_Await/                    # Async/Await
│   ├── 161_Async.js
│   ├── 162_Async.example.js
│   ├── 163_PyofDOM.js
│   ├── 164_Async_Await.js
│   ├── 165_Async_Await_seq.js
│   ├── 166_Async_Await_parallel.js
│   └── 167_IQ.js
│
├── chapter_19_Playwright_Basics/              # Introduction to Playwright Basics
│   ├── .gitignore                              # Playwright ignore patterns
│   ├── package.json                            # Playwright project configuration
│   ├── package-lock.json                       # Dependency lock file
│   ├── playwright.config.ts                    # Playwright test configuration
│   ├── sdetlivepdf                             # Playwright learning resource / reference PDF
│   └── tests/                                  # Playwright test files
│       ├── Codegen_TTA_Card.spec.ts            # Generated TTACart login test
│       └── example.spec.ts                     # Sample Playwright test
│
├── chapter_20_Oops_Basics/                     # OOP Basics - Export/Import & Class/Object
│   ├── 01_EXPORT_IMPORT/                       # Export and Import examples
│   │   ├── 168_EXPORT_IMPORT.js                # Introduction to export/import
│   │   ├── 169_Utils.js                        # Named import example
│   │   ├── 170_Loggers.js                      # Default import example
│   │   └── Explaindefault.md                   # Default vs named exports guide
│   ├── 02_Class_object/                        # Class and Object concepts
│   │   ├── 171_class_obj.js                    # Basic class structure (attributes & behaviour)
│   │   ├── 172_class_obj_example.js            # Class with constructor
│   │   ├── 173_Car_class.js                    # Class with parameterized constructor
│   │   ├── 174_Real_example.js                 # Real-world TestCase class example
│   │   ├── 175_IQ.js                           # Browser class interview question
│   │   ├── 176_Private_public.js               # Private (#) vs public fields
│   │   ├── 177_Static.js                       # Static variables and properties
│   │   └── 178_static_example.js               # Static variable example
│   ├── utils.js                                # Named exports utility
│   ├── testutils.js                            # Named exports test utility
│   └── logger.js                               # Default export logger
│
├── Task_Live_Class/                            # Live Class Tasks & Assignments
│   ├── 01_Task_29th_April.js
│   ├── 02_Task_04th_May.js
│   ├── 03_Task_08th_May.js
│   ├── 04_Task_11th_May.js
│   ├── 05_Task_13th_May.js
│   ├── 06_Task_15th_May.js
│   ├── 07_Task_18th_May.js
│   ├── 08_Task_Live_20th May.js
│   ├── 09_Task_20th_May.js
│   ├── 10_Task_22th_May.js
│   ├── 11_Task_03rd_June.js
│   ├── 12_Task_08th_June.js
│   ├── 13_Task_21st_June.js
│   └── 14_Task_22th_June.js
│
├── interview.md                                # JavaScript Interview Questions & Concepts
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
- **92_arrays_sort.js** - Sorting arrays (including compare functions)
- **93_array_slicing.js** - Array slicing (`slice`) vs splicing (`splice`)
- **94_arrays_concat.js** - Concatenating arrays and `join()` method
- **95_arrays_checking.js** - Checking arrays with `Array.isArray`, `every`, and `some`

---

### Chapter 12: Functions

**Files:** `chapter_12_Functions/`

Complete guide to JavaScript functions, from basic declarations to advanced concepts:
- **96_function.js** - Function declarations, expressions, and methods
- **97_function_type1.js** - No parameter, no return type functions
- **98_function_type2.js** - Parameter but no return type functions
- **99_function_type3.js** - No parameter but return type functions
- **100_function_type4.js** - Both parameter and return type functions
- **101_functionwithtemperalliteral.js** - Functions with template literals
- **102_function_expression.js** - Function expressions overview
- **103_arrow_function.js** - Arrow functions and shorthand syntax
- **104_arrow_fn_real_example.js** - Real-world arrow function examples
- **105_IIFE.js** - Immediately Invoked Function Expressions (IIFE)
- **106_Default_param_fn.js** - Default parameters in functions
- **107_IQ.js** - Function interview questions set 1
- **108_Rest_param_fn.js** - Rest parameters in functions
- **109_Interview_Q.js** - Function interview questions set 2
- **110_spread_IQ.js** - Spread operator interview questions
- **111_Scope_IO.js** - Scope-related interview questions
- **112_IQ.js** - Function interview questions set 3
- **113_closure.js** - Closures in JavaScript
- **114_closure_example.js** - Closure practical examples
- **115_API_real_ex_closure.js** - Real-world API examples using closures
- **116_higher_order_fn.js** - Higher-order functions
- **117_Pure_function.js** - Pure vs impure functions

---

### Chapter 13: Strings

**Files:** `chapter_13_strings/`

Complete guide to JavaScript strings with practical examples and a comprehensive cheat sheet:
- **118_strings.js** - Introduction to strings: single quotes, double quotes, backticks, multiline strings, and String() constructor
- **119_string_properties.js** - String properties and methods: length, charAt, toUpperCase, toLowerCase, indexOf, lastIndexOf, includes, startsWith, endsWith, slice, substring, split, trim, replace, repeat, at, codePointAt, normalize
- **120_strings_search.js** - Searching strings: indexOf, lastIndexOf, includes, startsWith, endsWith with real-world URL examples
- **121_substring.js** - Extracting substrings: substring(), slice(), differences between substring and slice with negative indices
- **122_String_Transform.js** - Transforming strings: trim, trimStart, trimEnd, toUpperCase, toLowerCase, replace, replaceAll, concatenation with + and template literals
- **123_String_conversion.js** - String conversion: String(), toString(), Number(), parseInt(), parseFloat()
- **javascript_string_cheatsheet.md** - Comprehensive cheat sheet with all JavaScript string methods in table format

---

### Chapter 14: Objects

**Files:** `chapter_14_objects/`

Complete guide to JavaScript objects, covering creation, manipulation, and interview questions:
- **124_objects.js** - Introduction to objects and object literals
- **125_objects_example.js** - Object practical examples
- **126_obj_creation.js** - Creating objects in JavaScript
- **127_obj_real_example.js** - Real-world object examples
- **128_obj_premitivevsREfrence.js** - Primitive vs reference types with objects
- **129_obj_example.js** - Additional object examples
- **130_Interview_Ques.js** - Object-related interview questions set 1
- **131_obj_with_functions.js** - Objects with functions (methods)
- **132_object_deconstruction.js** - Object destructuring
- **133_obj.spread.js** - Spread operator with objects
- **134_obj_get_set_method.js** - Getter and setter methods in objects
- **135_Interview_Ques.js** - Object-related interview questions set 2
- **136_obj_real.js** - Real-world object patterns
- **137_const_vs_let.js** - `const` vs `let` with objects and why `const` is preferred

---

### Chapter 15: 2D Arrays

**Files:** `chapter_15_2D_array/`

Complete guide to JavaScript 2D arrays with practical examples and pattern problems:
- **138_2D_array.js** - Introduction to 2D arrays
- **139_2d_array_example.js** - 2D array practical examples
- **140_2D_array_real_example.js** - Real-world 2D array examples
- **141_2D_array_function.js** - Functions with 2D arrays
- **142_IQ_right_pyramid_pattern.js** - Right pyramid pattern using 2D arrays (interview question)

---

### Chapter 16: Callbacks

**Files:** `chapter_16_callback/`

Understanding callbacks and the callback hell anti-pattern in JavaScript and Playwright DOM automation:
- **150_callback_hell.js** - Real QA scenario demonstrating callback hell with nested login flow (open browser → login page → enter credentials → click login)
- **151_callback_hell_of_DOM.js** - Playwright test demonstrating callback hell with 23+ nested DOM operations (page navigation, form interactions, profile editing, checkbox handling, logout)

**Key Concepts:**
- Callback functions and asynchronous execution
- The pyramid of doom / callback hell anti-pattern
- Why nested callbacks make code hard to read and maintain
- Foundation for understanding Promises and async/await

---

### Chapter 17: Promises

**Files:** `chapter_17_Promise/`

Complete guide to JavaScript Promises, from basic creation to real-world API patterns and promise chaining:
- **154_promise.js** - Introduction to Promises: creating a Promise with `resolve` and `reject`, handling success and failure
- **155_Promise_real_example_API.js** - Real-world API example using `.then()` to handle resolved Promise responses
- **156_promise_real_example_API_2.js** - Handling rejected Promises with `.catch()`, understanding when `.then()` is skipped
- **157_finally.js** - Using `.finally()` for cleanup that executes regardless of resolve or reject
- **158_callback_pyramid_problem.js** - Solving the callback pyramid problem with Promise chaining (browser automation flow: open → login → credentials → click)
- **159_promise.all.js** - `Promise.all()` and `Promise.allSettled()` for parallel promise execution with success and failure scenarios
- **160_IQ.js** - Promise interview questions and tricky scenarios: chaining, error handling, `Promise.resolve()`, `Promise.reject()`, and `Promise.all()` behavior

**Key Concepts:**
- Promise states: pending, fulfilled, rejected
- `.then()`, `.catch()`, and `.finally()` methods
- Promise chaining to avoid callback hell
- `Promise.all()` vs `Promise.allSettled()`
- Error propagation in promise chains

---

### Chapter 18: Async/Await

**Files:** `chapter_18_Async_Await/`

Complete guide to JavaScript `async/await`, from basic syntax to sequential vs parallel execution and real-world automation patterns:
- **161_Async.js** - Introduction to `async` functions: handling `Promise.reject()` with `try...catch...finally`
- **162_Async.example.js** - Real-world example: awaiting a `Promise.resolve()` token, understanding when to use `await`
- **163_PyofDOM.js** - Solving callback pyramid of doom with `async/await`: browser automation flow (open browser → login page → credentials → click login)
- **164_Async_Await.js** - Understanding how `async` functions return a Promise and can be chained with `.then()`
- **165_Async_Await_seq.js** - Sequential execution with `async/await`: running dependent API calls (login → dashboard → report) and measuring total execution time
- **166_Async_Await_parallel.js** - Parallel execution with `async/await` + `Promise.all()`: running independent API calls simultaneously (Auth, User creation, Support Page)
- **167_IQ.js** - Async/await interview questions and hands-on scenarios: returning values from async functions, awaiting resolved Promises, and test flow automation

**Key Concepts:**
- `async` function declarations and implicit Promise returns
- `await` keyword for pausing execution until a Promise settles
- `try...catch...finally` for error handling in async code
- Sequential vs parallel async execution patterns
- Using `Promise.all()` inside async functions for parallelism
- Solving callback hell with readable async/await syntax

---

### Chapter 19: Playwright Basics

**Files:** `chapter_19_Playwright_Basics/`

Introduction to Playwright test automation framework:
- **.gitignore** - Playwright ignore patterns (node_modules, test-results, playwright-report, blob-report, cache, auth)
- **package.json** - Project setup with Playwright dependency (`playwright: ^1.61.0`) and devDependencies (`@playwright/test`, `@types/node`)
- **package-lock.json** - Lock file ensuring consistent dependency versions across installs
- **playwright.config.ts** - Playwright test configuration for multi-browser testing (Chromium, Firefox, WebKit)
- **sdetlivepdf** - Playwright learning resource and reference PDF for SDET live sessions
- **tests/example.spec.ts** - Sample Playwright test verifying TTACart page title
- **tests/Codegen_TTA_Card.spec.ts** - Playwright codegen-generated test for TTACart login flow

**Key Concepts:**
- Playwright installation and project setup
- Foundation for browser automation testing
- Pre-requisite for advanced Playwright chapters
- Dependency management with npm (`package.json` and `package-lock.json`)
- Playwright test runner (`@playwright/test`)
- Codegen for automated test generation
- Multi-browser testing (Chromium, Firefox, WebKit)
- Test fixtures (`page`, `expect`)

---

### Chapter 20: OOP Basics

**Files:** `chapter_20_Oops_Basics/`

Introduction to Object-Oriented Programming (OOP) fundamentals in JavaScript, covering export/import and class/object concepts:

#### 20.1 Export/Import
- **Files:** `01_EXPORT_IMPORT/`
- **168_EXPORT_IMPORT.js** - Introduction to export and import syntax
- **169_Utils.js** - Named import example using utils.js and testutils.js
- **170_Loggers.js** - Default import example using logger.js
- **Explaindefault.md** - Explanation of default vs named exports

#### 20.2 Class and Object
- **Files:** `02_Class_object/`
- **171_class_obj.js** - Basic class structure with attributes and behaviour
- **172_class_obj_example.js** - Class with constructor (default constructor)
- **173_Car_class.js** - Class with parameterized constructor and methods
- **174_Real_example.js** - Real-world TestCase class example
- **175_IQ.js** - Browser class interview question
- **176_Private_public.js** - Private (`#`) vs public fields
- **177_Static.js** - Static variables and properties
- **178_static_example.js** - Static variable example

**Key Concepts:**
- Named exports vs default exports
- Import aliases using `as`
- Re-exporting modules
- ES Module syntax in TypeScript/JavaScript
- Class declaration and structure
- Constructors (default and parameterized)
- Attributes and methods
- Private (`#`) vs public fields
- Static variables and methods
- Real-world OOP patterns for QA/Test automation

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
- **09_Task_20th_May.js** - Task from 20th May session
- **10_Task_22th_May.js** - Task from 22nd May session
- **11_Task_03rd_June.js** - Task from 3rd June session
- **12_Task_08th_June.js** - Task from 8th June session
- **13_Task_21st_June.js** - OOP Class and Object research task from 21st June session
- **14_Task_22th_June.js** - Calculator and Students class task from 22nd June session

---

### Interview Questions

**File:** `interview.md`

A dedicated reference covering commonly asked JavaScript interview questions and concepts, including:
- Why `const` is preferred when declaring objects in JavaScript
- Variable binding vs object property mutation
- `Object.freeze()` and true immutability
- Best practices for `const`, `let`, and `var`

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
node chapter_11_Arrays/92_arrays_sort.js
node chapter_11_Arrays/93_array_slicing.js
node chapter_11_Arrays/94_arrays_concat.js
node chapter_11_Arrays/95_arrays_checking.js
```

### Run Chapter 12 Files
```bash
node chapter_12_Functions/96_function.js
node chapter_12_Functions/97_function_type1.js
node chapter_12_Functions/98_function_type2.js
node chapter_12_Functions/99_function_type3.js
node chapter_12_Functions/100_function_type4.js
node chapter_12_Functions/101_functionwithtemperalliteral.js
node chapter_12_Functions/102_function_expression.js
node chapter_12_Functions/103_arrow_function.js
node chapter_12_Functions/104_arrow_fn_real_example.js
node chapter_12_Functions/105_IIFE.js
node chapter_12_Functions/106_Default_param_fn.js
node chapter_12_Functions/107_IQ.js
node chapter_12_Functions/108_Rest_param_fn.js
node chapter_12_Functions/109_Interview_Q.js
node chapter_12_Functions/110_spread_IQ.js
node chapter_12_Functions/111_Scope_IO.js
node chapter_12_Functions/112_IQ.js
node chapter_12_Functions/113_closure.js
node chapter_12_Functions/114_closure_example.js
node chapter_12_Functions/115_API_real_ex_closure.js
node chapter_12_Functions/116_higher_order_fn.js
node chapter_12_Functions/117_Pure_function.js
```

### Run Chapter 13 Files
```bash
node chapter_13_strings/118_strings.js
node chapter_13_strings/119_string_properties.js
node chapter_13_strings/120_strings_search.js
node chapter_13_strings/121_substring.js
node chapter_13_strings/122_String_Transform.js
node chapter_13_strings/123_String_conversion.js
```

### Run Chapter 14 Files
```bash
node chapter_14_objects/124_objects.js
node chapter_14_objects/125_objects_example.js
node chapter_14_objects/126_obj_creation.js
node chapter_14_objects/127_obj_real_example.js
node chapter_14_objects/128_obj_premitivevsREfrence.js
node chapter_14_objects/129_obj_example.js
node chapter_14_objects/130_Interview_Ques.js
node chapter_14_objects/131_obj_with_functions.js
node chapter_14_objects/132_object_deconstruction.js
node chapter_14_objects/133_obj.spread.js
node chapter_14_objects/134_obj_get_set_method.js
node chapter_14_objects/135_Interview_Ques.js
node chapter_14_objects/136_obj_real.js
node chapter_14_objects/137_const_vs_let.js
```

### Run Chapter 15 Files
```bash
node chapter_15_2D_array/138_2D_array.js
node chapter_15_2D_array/139_2d_array_example.js
node chapter_15_2D_array/140_2D_array_real_example.js
node chapter_15_2D_array/141_2D_array_function.js
node chapter_15_2D_array/142_IQ_right_pyramid_pattern.js
```

### Run Chapter 16 Files
```bash
node chapter_16_callback/150_callback_hell.js
node chapter_16_callback/151_callback_hell_of_DOM.js
```

### Run Chapter 17 Files
```bash
node chapter_17_Promise/154_promise.js
node chapter_17_Promise/155_Promise_real_example_API.js
node chapter_17_Promise/156_promise_real_example_API_2.js
node chapter_17_Promise/157_finally.js
node chapter_17_Promise/158_callback_pyramid_problem.js
node chapter_17_Promise/159_promise.all.js
node chapter_17_Promise/160_IQ.js
```

### Run Chapter 18 Files
```bash
node chapter_18_Async_Await/161_Async.js
node chapter_18_Async_Await/162_Async.example.js
node chapter_18_Async_Await/163_PyofDOM.js
node chapter_18_Async_Await/164_Async_Await.js
node chapter_18_Async_Await/165_Async_Await_seq.js
node chapter_18_Async_Await/166_Async_Await_parallel.js
node chapter_18_Async_Await/167_IQ.js
```

### Run Chapter 19 Files
```bash
cd chapter_19_Playwright_Basics
npm install
npx playwright test
```

### Run Chapter 19 Tests (Headed)
```bash
cd chapter_19_Playwright_Basics
npx playwright test --headed
```

### Run Chapter 20 Files
```bash
node chapter_20_Oops_Basics/01_EXPORT_IMPORT/168_EXPORT_IMPORT.js
node chapter_20_Oops_Basics/01_EXPORT_IMPORT/169_Utils.js
node chapter_20_Oops_Basics/01_EXPORT_IMPORT/170_Loggers.js
node chapter_20_Oops_Basics/02_Class_object/171_class_obj.js
node chapter_20_Oops_Basics/02_Class_object/172_class_obj_example.js
node chapter_20_Oops_Basics/02_Class_object/173_Car_class.js
node chapter_20_Oops_Basics/02_Class_object/174_Real_example.js
node chapter_20_Oops_Basics/02_Class_object/175_IQ.js
node chapter_20_Oops_Basics/02_Class_object/176_Private_public.js
node chapter_20_Oops_Basics/02_Class_object/177_Static.js
node chapter_20_Oops_Basics/02_Class_object/178_static_example.js
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
node Task_Live_Class/09_Task_20th_May.js
node Task_Live_Class/10_Task_22th_May.js
node Task_Live_Class/11_Task_03rd_June.js
node Task_Live_Class/12_Task_08th_June.js
node Task_Live_Class/13_Task_21st_June.js
node Task_Live_Class/14_Task_22th_June.js
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
| **Arrays** | Creating, accessing, adding/removing, searching, iterating, transforming, sorting, slicing, concatenating |
| **Functions** | Declarations, expressions, arrow functions, parameters, return types, template literals, IIFE, default/rest parameters, closures, higher-order functions, pure functions |
| **Objects** | Object literals, creation, primitive vs reference, destructuring, spread, getters/setters, methods, real-world patterns, `const` vs `let` |
| **2D Arrays** | Introduction, examples, real-world usage, functions with 2D arrays, pattern problems (right pyramid) |
| **Callbacks** | Callback functions, callback hell, pyramid of doom, Playwright DOM automation with callbacks |
| **Promises** | Promise creation, `.then()`, `.catch()`, `.finally()`, chaining, `Promise.all()`, `Promise.allSettled()`, interview questions |
| **Async/Await** | `async` functions, `await` keyword, `try...catch...finally`, sequential vs parallel execution, solving callback hell |
| **Playwright Basics** | Playwright installation, project setup, browser automation foundation |
| **OOP Basics** | Classes, objects, constructors, attributes, methods, private/public fields, static variables, export/import syntax, named vs default exports, ES Module fundamentals |
| **Strings** | Creating strings, properties, searching, extracting, transforming, conversion, string methods cheat sheet |
| **Loops** | `for`, `while`, `do...while`, `for...in`, `for...of`, `forEach`, interview questions |
| **Live Tasks** | Hands-on assignments from live sessions |
| **Interview Questions** | JavaScript interview Q&A reference |
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

*Last updated: June 23, 2026 — Added Task 14: Calculator and Students class task (22nd June session)*
