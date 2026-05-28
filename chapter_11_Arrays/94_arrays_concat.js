//concat -- The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

//let c= arr1+arr2+arr3; //This will not concatenate the arrays, but will convert them to strings and concatenate the strings.
//console.log(c); //Output: "1,2,34,5,67,8,9" //The original arrays will not be modified.


let combined = arr1.concat(arr2, arr3);
console.log(combined); //Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] //The original arrays will not be modified.

//spread operator can also be used to concatenate arrays (modern way)
let combinedWithSpread = [...arr1, ...arr2, ...arr3];
console.log(combinedWithSpread); //Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] //The original arrays will not be modified.

//join - The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. The original array will not be modified.
let test = ["pass", "fail", "skip"];
let joined = test.join("--"); //join(separator) => separator is the string to separate each element of the array. If separator is not provided, a comma (,) is used by default.
console.log(joined); //Output: "pass--fail--skip" //The original array will not be modified.