//string conversion - converting other types of values to strings

console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String({})); // "[object Object]"
console.log(String([1, 2, 3])); // "1,2,3"

(200).toString(); // "200"
(true).toString(); // "true"
(null).toString(); // TypeError: Cannot read properties of null (reading 'toString')
(undefined).toString(); // TypeError: Cannot read properties of undefined (reading 'toString')

//toString() method is not available for null and undefined, so we can use String() constructor for those cases
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

console.log(Number("42.34")); // 42.34
console.log(Number("not-a-number")); // NaN

parseInt("42px"); // 42
parseFloat("3.14abc"); // 3.14