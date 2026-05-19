
//1.) Maximum number between two numbers, okay, by using the ternary operator 

let x = 25;
let y = 15;
let largestNumber = x > y ? "x is larger" : "y is larger";
console.log(largestNumber); // Output: x is larger



//2.) And maximum between the three numbers also by using turnery over 

let a = 10;
let b = 20;
let c = 30;
let largest = a > b ? (a > c ? "a is largest" : "c is largest") : (b > c ? "b is largest" : "c is largest");
console.log(largest); // Output: c is largest

//Upload your solution to the GitHub profile also. Done


let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);

//Output: 18
// Output: 6

// Explanation:
// 1. a++: Post-increment, so the value used in the expression is 5 (the current value of a), and then a becomes 6.
// 2. ++a: Pre-increment, so a becomes 7, and the value used in the expression is 7.
// 3. --a: Pre-decrement, so a becomes 6, and the value used in the expression is 6.
// 4. a--: Post-decrement, so the value used in the expression is 6 (the current value of a), and then a becomes 5.
// 5. ++a: Pre-increment, so a becomes 6, and the value used in the expression is 6.
// The expression evaluates to 5 (from a++) + 7 (from ++a) - 6 (from --a) + 6 (from a--) + 6 (from ++a), resulting in 18.