//substring-extracts characters from a string between two specified indices and returns the new substring

let str = "Hello, World!";
console.log(str.substring(0, 5)); // "Hello" (characters from index 0 to 4)
console.log(str.substring(7)); // "World!" (characters from index 7 to the end of the string)
console.log(str.substring(7, 12)); // "World" (characters from index 7 to 11)
console.log(str.substring(12, 7)); // "World" (if the first index is greater than the second, substring swaps them)
console.log(str.substring(-5, 5)); // "Hello" (negative indices are treated as 0)
console.log(str.substring(0, 100)); // "Hello, World!" (if the second index is greater than the string length, it is treated as the string length)

let str2 = "Login_Test_Pass_001";
//slice and substring are similar, but slice allows negative indices to count from the end of the string, while substring does not
console.log(str2.slice(0, 5)); // "Login" (characters from index 0 to 4)
console.log(str2.slice(-3)); // "001" (last 3 characters)
console.log(str2.substring(-3)); // "Login_Test_Pass_001" (negative index is treated as 0)
console.log(str2.slice(11)); // "Pass_001" (characters from index 11 to the end of the string)