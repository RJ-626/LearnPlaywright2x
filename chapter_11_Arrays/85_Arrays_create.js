//creating an array by using array literal syntax
let numbers = [10, 20, 30, 40, 50];
console.log(numbers); //Output: [10, 20, 30, 40, 50]

let browsers = ["chrome", "firefox", "safari", "edge"];
console.log(browsers[1]); //Output: firefox
console.log(browsers.length); //Output: 4

//array constructor - creates an array using the Array constructor function - creates an array of specified length or with specified elements
let colour = new Array("red", "green", "blue");
console.log(colour); //Output: ["red", "green", "blue"]
console.log(colour[2]); //Output: blue
console.log(colour.length); //Output: 3
console.log(colour.indexOf("green")); //Output: 1
console.log(colour[3]); //Output: undefined

let score = new Array(5); //creates an array of length 5 with undefined values
console.log(score); //Output: [undefined, undefined, undefined, undefined, undefined]
score[0] = 85;
score[1] = 90;
score[2] = 78;
console.log(score); //Output: [85, 90, 78, undefined, undefined]
score[3] = 92;
score[4] = 88;
console.log(score); //Output: [85, 90, 78, 92, 88]

//Array.of method
let test = Array.of("pass", "fail", "skip", "blocked");
console.log(test); //Output: ["pass", "fail", "skip", "blocked"]
console.log(test[0]); //Output: pass
console.log(test.length); //Output: 4

//Array.from method
let str = "hello";
let chars = Array.from(str);
console.log(chars); //Output: ["h", "e", "l", "l", "o"]

let num = 12345678;
let digits = Array.from(String(num));
console.log(digits); //Output: [1, 2, 3, 4, 5, 6, 7, 8]

