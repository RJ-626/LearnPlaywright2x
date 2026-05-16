/**
 * NULL vs UNDEFINED in JavaScript
 * 
 * undefined:
 * - Represents a variable that has been declared but not assigned a value.
 * - It is the default value for uninitialized variables.
 * - Functions return undefined if no return value is specified.
 * - typeof undefined === "undefined"
 * 
 * null:
 * - Represents an intentional absence of any object value.
 * - It must be explicitly assigned by the programmer.
 * - Often used to indicate "no value" or "empty" deliberately.
 * - typeof null === "object" (this is a known quirk/bug in JavaScript)
 * 
 * Key Differences:
 * 1. undefined is automatically assigned by JS; null is manually assigned.
 * 2. undefined means "not initialized"; null means "intentionally empty".
 * 3. typeof undefined is "undefined"; typeof null is "object".
 * 4. undefined == null  → true  (loose equality)
 * 5. undefined === null → false (strict equality)
 */

// ==============================
// 1. undefined examples
// ==============================

let userName;
console.log(userName);           // undefined (declared but not assigned)
console.log(typeof userName);    // "undefined"

function greet() {
    // no return statement
}
console.log(greet());            // undefined

let person = { name: "Pramod" };
console.log(person.age);         // undefined (property does not exist)

// ==============================
// 2. null examples
// ==============================

let emptyValue = null;
console.log(emptyValue);         // null
console.log(typeof emptyValue);  // "object" (known JS quirk)

let user = { email: "test@example.com" };
user.email = null;               // intentionally clearing the value
console.log(user.email);         // null

// ==============================
// 3. Comparison
// ==============================

console.log(undefined == null);   // true  (loose equality)
console.log(undefined === null);  // false (strict equality)

let a;
let b = null;

console.log(a);        // undefined
console.log(b);        // null

// Use case: Check for both null and undefined
console.log(a == null);   // true (covers both null and undefined)
console.log(b == null);   // true (covers both null and undefined)

// ==============================
// 4. Best Practice
// ==============================

// Use null when you want to explicitly represent "no value" or "empty".
// Use undefined to check if something has not been initialized.

