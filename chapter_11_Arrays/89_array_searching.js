
let results = ["pass", "fail", "skip", "fail", "blocked"];
console.log(results.indexOf("fail")); //Output: 1
console.log(results.indexOf("pass")); //Output: 0
console.log(results.indexOf("skip")); //Output: 2
console.log(results.indexOf("blocked")); //Output: 4
console.log(results.indexOf("not found")); //Output: -1
console.log(results.indexOf("fail", 2)); //Output: 3 (searches for "fail" starting from index 2)

//lastIndexOf method to search for the last occurrence of an element in the array
console.log(results.lastIndexOf("fail")); //Output: 3 (searches for "fail" from the end of the array)

//includes method to check if an element exists in the array
console.log(results.includes("pass")); //Output: true
results.includes("in progress"); //Output: false

//find method to search for an element in the array and return the first matching element
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(num => num > 3);
console.log(found); //Output: 4 (returns the first element that is greater than 3)

let num = [10, 15, 20, 25, 30];
let found2 = num.find(n => n > 15); //arrow function - searches for the first element in the num array that is greater than 15 and assigns it to found2
console.log(found2); //Output: 20 (returns the first element that is greater than 15)

//findIndex method to search for an element in the array and return the index of the first matching element
let index = num.findIndex(num => num > 10);
console.log(index); //Output: 1 (returns the index of the first element that is greater than 10)

//findlastIndex method to search for an element in the array and return the index of the last matching element
let lastIndex = num.findLastIndex(num => num > 20);
console.log(lastIndex); //Output: 4 (returns the index of the last element that is greater than 20)