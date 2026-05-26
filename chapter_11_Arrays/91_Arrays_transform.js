
//transform an array into another array
let numbers = [1, 2, 3, 4, 5];
//map method to create a new array  of same size by applying a function to each element of the original array
let squared = numbers.map(num => num * num);
console.log(squared); //Output: [1, 4, 9, 16, 25]

let scores = [80, 90, 70, 85];
let grades = scores.map(s => s > 70 ? "pass" : "fail");
console.log(grades); //Output: ["pass", "pass", "fail", "pass"]

//filter method to create a new array with all elements that pass a test implemented by a function
let passed = scores.filter(s => s > 70);
console.log(passed); //Output: [80, 90, 85]

//reduce method to apply a function against an accumulator and each element in the array to reduce it to a single value
let total = scores.reduce((a, b) => a + b, 0); //0 is intial value of a
console.log(total); //Output: 325 (sums up all the scores in the array)

//flatMap method to create a new array by applying a function to each element of the original array and flattening the result into a single array
let nested = [[1, 2], [3, 4], [5]];
let flattened = nested.flat();
console.log(flattened); //Output: [1, 2, 3, 4, 5]