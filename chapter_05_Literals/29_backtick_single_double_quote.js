// Single Quotes vs Double Quotes vs Backticks in JavaScript

// 1. Single Quotes (' ')
//    - Used for simple string literals.
//    - Cannot contain unescaped single quotes inside.
let single = 'Hello Pramod';
console.log(single); // Hello Pramod

// 2. Double Quotes (" ")
//    - Same behavior as single quotes.
//    - Useful when string contains apostrophes (single quotes).
let double = "Hello Pramod";
console.log(double); // Hello Pramod

// 3. Backticks / Template Literals (` `)
//    - Support string interpolation using ${variable}.
//    - Support multi-line strings.
//    - Allow expressions inside ${ }.
let name = "Pramod";
let backtick = `Hello ${name}`;
console.log(backtick); // Hello Pramod
