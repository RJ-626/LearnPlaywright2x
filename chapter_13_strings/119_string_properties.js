
//string properties and methods

let str = "Hello, World!";
console.log(str.length); // 13
console.log(str[0]); // "H"
console.log(str.charAt(0)); // "H"
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.indexOf('o')); // 4
console.log(str.lastIndexOf('o')); // 8
console.log(str.includes('World')); // true
console.log(str.startsWith('Hello')); // true
console.log(str.endsWith('!')); // true
console.log(str.slice(0, 5)); // "Hello"
console.log(str.substring(0, 5)); // "Hello"
console.log(str.split(', ')); // ["Hello", "World!"]
console.log(str.trim()); // "Hello, World!" (no leading or trailing whitespace)
console.log(str.replace('World', 'JavaScript')); // "Hello, JavaScript!"
console.log(str.repeat(2)); // "Hello, World!Hello, World!"
console.log(str.at(-1)); // "!" (last character)
console.log(str.codePointAt(0)); // 72 (Unicode code point of 'H')
console.log(str.normalize()); // "Hello, World!" (normalized string)
