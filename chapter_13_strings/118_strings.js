
//string - sequence of characters
//string is immutable - cannot be changed after it is created

//single quote
let str1 = 'Hello, World!';
console.log(str1); // Hello, World!

//double quote
let str2 = "Hello, World!";
console.log(str2); // Hello, World!

//backticks - template literals
let name = 'Alice';
let str3 = `Hello, ${name}!`;
console.log(str3); // Hello, Alice!

//multiline string with backticks
let str4 = `This is a
multiline string.`;
console.log(str4);
// This is a
// multiline string.

//String interface - String() constructor can be used to create a string from other types of values

console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String({})); // "[object Object]"
console.log(String([1, 2, 3])); // "1,2,3"