
let a = 34;
let result = a++;
console.log(result); // Output: 34
console.log(a); // Output: 35


let a = 10;
console.log(++a + a++); // Output: 22
// Explanation:
// 1. ++a: Pre-increment, so a becomes 11, and the value used in the expression is 11.
// 2. a++: Post-increment, so the value used in the expression is 11 (the current value of a), and then a becomes 12.
// The expression evaluates to 11 (from ++a) + 11 (from a++), resulting in 22.

let a = 10;
console.log(a++ + ++a); // Output: 22
console.log(a); // Output: 12
// Explanation:
// 1. a++: Post-increment, so the value used in the expression is 10 (the current value of a), and then a becomes 11.
// 2. ++a: Pre-increment, so a becomes 12, and the value used in the expression is 12.
// The expression evaluates to 10 (from a++) + 12 (from ++a), resulting in 22.

let a = 10;
console.log(++a + ++a); // Output: 23
console.log(a); // Output: 12
// Explanation:
// 1. ++a: Pre-increment, so a becomes 11, and the value used in the expression is 11.
// 2. ++a: Pre-increment again, so a becomes 12, and the value used in the expression is 12.
// The expression evaluates to 11 (from the first ++a) + 12 (from the second ++a), resulting in 23.

let a = 5;
console.log(a++ + ++a - --a + a-- + ++a); // Output: 18
console.log(a); // Output: 6
// Explanation:
// 1. a++: Post-increment, so the value used in the expression is 5 (the current value of a), and then a becomes 6.
// 2. ++a: Pre-increment, so a becomes 7, and the value used in the expression is 7.
// 3. --a: Pre-decrement, so a becomes 6, and the value used in the expression is 6.
// 4. a--: Post-decrement, so the value used in the expression is 6 (the current value of a), and then a becomes 5.
// 5. ++a: Pre-increment, so a becomes 6, and the value used in the expression is 6.
// The expression evaluates to 5 (from a++) + 7 (from ++a) - 6 (from --a) + 6 (from a--) + 6 (from ++a), resulting in 18.