//Transform strings - changing the case of letters, trimming whitespace, etc.

let str = "   Hello, World!   ";
console.log(str.trim()); // "Hello, World!" (removes leading and trailing whitespace)
console.log(str.trimStart()); // "Hello, World!   " (removes leading whitespace)
console.log(str.trimEnd()); // "   Hello, World!" (removes trailing whitespace)
console.log(str.toUpperCase()); // "   HELLO, WORLD!   " (converts to uppercase)
console.log(str.toLowerCase()); // "   hello, world!   " (converts to lowercase)

//capitalizing the first letter of each word in a string
let sentence = "the quick brown fox";
console.log(sentence.charAt(0).toUpperCase() + sentence.slice(1)); // "The quick brown fox"

let mssg = " Test, fail, pass,retry, success ";
let rr = mssg.replace("fail", "pass"); // " Test, pass, pass,retry, success " (replaces the first occurrence of 'fail' with 'pass')
console.log(rr);

let rr2 = mssg.replace(/pass/g, "success"); // " Test, fail, success,retry, success " (replaces all occurrences of 'pass' with 'success' using a regular expression with the global flag)
console.log(rr2);
console.log(mssg.replaceAll("retry", "okay")); // " Test, fail, success,okay, success " (replaces all occurrences of 'retry' with 'okay' using replaceAll method)

//concatenating strings
let str1 = "Hello";
let str2 = "World";
console.log(str1 + ", " + str2 + "!"); // "Hello, World!"
console.log(`${str1}, ${str2}!`); // "Hello, World!" (using template literals)

let line = "Rahul";
let profile = "Senior QA Engineer";
console.log(line.concat(", ", profile)); // "Rahul, Senior QA Engineer" (using concat method)

let url = "https;//staging.vwo.com/app/login?retry=app";
console.log(url.replace("staging", "QA")); // "http;//QA.vwo.com/app/login?retry=app" (replaces 'staging' with 'QA')
console.log(url.replace(/app/g, "production")); // "http;//staging.vwo.com/production/login?retry=production" (replaces all occurrences of 'app' with 'production' using a regular expression with the global flag)

let mssg3 = "   Hello, World! and Thank you Rahul  ";
let result = mssg3.split(", "); // ["   Hello", "World! and Thank you Rahul  "] (splits the string into an array of substrings using ', ' as the separator)
console.log(result); // ["   Hello", "World! and Thank you Rahul  "] (logs the array returned by the split method)

let rr= "Test, fail, pass".split(", ").join(" - "); // "Test - fail - pass" (splits the string into an array and then joins it back into a string with ' - ' as the separator)
console.log(rr); // "Test - fail - pass" (logs the transformed string)

let parts=["2023","06","01"];
let date = parts.join("-");
console.log(date); // "2023-06-01" (joins the array elements into a string with '-' as the separator)