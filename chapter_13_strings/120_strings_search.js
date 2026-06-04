//searching for a string in a string

let str = "Hello, World!";
console.log(str.indexOf('o')); // 4
console.log(str.indexOf('o', 5)); // 8 (start searching from index 5)
console.log(str.lastIndexOf('o')); // 8

let url = "https://staging.vwo.com/api/login?retry=true";
//includes returns true if the specified value is found in the string, otherwise false
console.log(url.includes('staging')); // true
console.log(url.includes('production')); // false

//startsWith returns true if the string starts with the specified value, otherwise false
//endsWith returns true if the string ends with the specified value, otherwise false
console.log(url.startsWith('https')); // true
console.log(url.endsWith('retry=true')); // true
console.log(url.endsWith('retry=false')); // false
console.log(url.endsWith('retry=true&')); // false

//indexOf returns the index of the first occurrence of the specified value, or -1 if not found
console.log(url.indexOf('staging')); // 7
console.log(url.indexOf('production')); // -1
console.log(url.indexOf('a')); // 10 (first occurrence of 'a')
console.log(url.indexOf('a', 12)); // 24 (start searching from index 12)

//lastIndexOf returns the index of the last occurrence of the specified value, or -1 if not found
console.log(url.lastIndexOf('a')); // 24 (last occurrence of 'a')
console.log(url.lastIndexOf('a', 23)); // 10 (start searching backwards from index 23)

console.log(url.indexOf('nowhere')); // -1
console.log(url.lastIndexOf('x')); // -1

//searching for a string in a string using regular expressions

let text = "The quick brown fox jumps over the lazy dog.";
console.log(text.search(/fox/)); // 16 (index of 'fox') //regex search is case-sensitive by default
console.log(text.search(/cat/)); // -1 (not found)
console.log(text.search(/the/i)); // 31 (case-insensitive search for 'the')
console.log(text.search(/The/)); // 0 (case-insensitive search for 'The')

//regex- Regular expression - based search can also be used to find patterns in strings, such as email addresses, phone numbers, etc.

let email = "john.doe@example.com";
console.log(email.search(/@/)); // 8 (index of '@')
console.log(email.search(/\./)); // 4 (index of '.') - If you actually wanted to find a real dot/period, you must "escape" it with a backslash:
console.log(email.search(/example/i)); // 9 (case-insensitive search for 'example') - This looks for the word "example". The i at the end means "ignore case" (so it would also match "EXAMPLE" or "Example").  