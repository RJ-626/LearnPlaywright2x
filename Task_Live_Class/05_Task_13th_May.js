
/* Research Hoisting and TDZ for the var, let and const with explain.

Hoisting and Temporal Dead Zone (TDZ) in JavaScript
1. What is Hoisting?
Hoisting is JavaScript's default behavior of moving declarations to the top of their containing scope during the compilation phase (before code execution).
> Important: Only declarations are hoisted, NOT initializations/assignments.


2. var Hoisting
With var, both the declaration and initialization are hoisted, but the initialization happens at the original line. Until then, the variable holds the value undefined.

Example 1: var is hoisted with undefined
console.log(myVar); // Output: undefined (not an error!)
var myVar = 10;
console.log(myVar); // Output: 10

What JavaScript sees internally:
var myVar;           // Declaration hoisted to top
console.log(myVar);    // undefined
myVar = 10;          // Assignment stays in place
console.log(myVar);    // 10


Example 2: var function scope hoisting
function example() {
    console.log(a); // Output: undefined
    var a = 5;
    console.log(a); // Output: 5
}
example();

Example 3: var hoisted outside its block
function test() {
    if (true) {
        var x = 100;
    }
    console.log(x); // Output: 100 (var ignores block scope!)
}
test();
---


3. let and const Hoisting + TDZ
let and const are also hoisted, but they behave very differently from var. They enter the Temporal Dead Zone (TDZ).
What is TDZ (Temporal Dead Zone)?
The Temporal Dead Zone is the period between when a variable is hoisted (enters scope) and when it is declared/initialized. During this time, the variable exists but cannot be accessed.
> Accessing a variable in the TDZ throws a ReferenceError.
---
4. let Hoisting + TDZ
Example 1: let in TDZ throws error
console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet);
What happens internally:
// myLet is hoisted here (enters scope)
// TDZ starts ----
console.log(myLet); // ❌ ERROR! Still in TDZ
// TDZ ends ----
let myLet = 20;   // Declaration + initialization
console.log(myLet); // ✅ 20


Example 2: let block scope
function letExample() {
    // console.log(a); // ❌ ReferenceError if uncommented (TDZ)
    let a = 5;
    console.log(a); // ✅ 5
    
    if (true) {
        let b = 10;
        console.log(b); // ✅ 10
    }
    // console.log(b); // ❌ ReferenceError: b is not defined (block scoped!)
}
letExample();


Example 3: TDZ with nested scopes
let x = 10;
function test() {
    console.log(x); // ❌ ReferenceError! 
    // The local 'x' is hoisted, creating a TDZ that shadows the outer 'x'
    let x = 20;
}
test();
---


5. const Hoisting + TDZ
const behaves exactly like let regarding hoisting and TDZ, but with one additional rule: must be initialized at declaration.

Example 1: const TDZ error
console.log(myConst); // ❌ ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30;


Example 2: const must be initialized
const PI; // ❌ SyntaxError: Missing initializer in const declaration
PI = 3.14;

Example 3: const correct usage
const PI = 3.14159;
console.log(PI); // ✅ 3.14159
// PI = 3.14; // ❌ TypeError: Assignment to constant variable
--- */

