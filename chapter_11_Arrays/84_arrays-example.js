
let fruits = []; //Empty array
fruits[0] = "apple";
fruits[1] = "orange";
fruits[2] = "banana";
fruits[3] = "grapes";
console.log(fruits); //Output: ["apple", "orange", "banana", "grapes"]
console.log(fruits.length); //Output: 4
console.log(fruits[1]); //Output: orange


let animals = ["cat", "dog", "rat", "cow"];
console.log(animals); //Output: ["cat", "dog", "rat", "cow"]
console.log(animals.length); //Output: 4
console.log(animals[2]); //Output: rat
console.log(animals.indexOf("dog")); //Output: 1

console.log(animals[5]); //Output: undefined
animals[5] = "lion";
console.log(animals); //Output: ["cat", "dog", "rat", "cow", undefined, "lion"]
console.log(animals.length); //Output: 6


let Test_result =["pass","fail","skip","blocked"];
let mixed=[1,"hello",true,3.123]; //arrays can hold different types of data
console.log(Test_result); //Output: ["pass", "fail", "skip", "blocked"]
console.log(mixed); //Output: [1, "hello", true, 3.123]
