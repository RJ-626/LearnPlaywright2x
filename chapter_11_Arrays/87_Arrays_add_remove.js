
let arr =[1,2,3,4];
//Adding elements to an array
arr.push(5); //adds 5 to the end of the array
console.log(arr); //Output: [1, 2, 3, 4, 5]

arr.pop(); //removes the last element (5) from the array
console.log(arr); //Output: [1, 2, 3, 4]

arr.push(5,6,7); //adds multiple elements to the end of the array
console.log(arr); //Output: [1, 2, 3, 4, 5, 6, 7]

arr.unshift(0); //adds 0 to the beginning of the array
console.log(arr); //Output: [0, 1, 2, 3, 4, 5, 6, 7]

arr.shift(); //removes the first element (0) from the array
console.log(arr); //Output: [1, 2, 3, 4, 5, 6, 7]

arr.unshift(-2, -1); //adds multiple elements to the beginning of the array
console.log(arr); //Output: [-2, -1, 1, 2, 3, 4, 5, 6, 7]

arr.shift(-2,-1); //removes the first two elements (-2 and -1) from the array
console.log(arr); //Output: [1, 2, 3, 4, 5, 6, 7]

let arr2=[1,2,3,"a","b","c"];
arr2.push("c","d",2.34); //adds multiple elements to the end of the array
console.log(arr2); //Output: [1, 2, 3, "a", "b", "c", "c", "d", 2.34]

//splice method to add/remove elements from an array
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 1); //removes 1 element at index 2 (removes 3)
console.log(arr3); //Output: [1, 2, 4, 5]

arr3.splice(2, 0, "a", "b"); //adds "a" and "b" at index 2 without removing any elements
console.log(arr3); //Output: [1, 2, "a", "b", 3, 4, 5]

arr3.splice(2, 1, 99); //replaces 1 element at index 2 (replaces "a" with 99)
console.log(arr3); //Output: [1, 2, 99, "b", 3, 4, 5]

arr3.splice(1, 2, 10,20); //removes 2 elements at index 1 (removes 2 and 99) and adds 10 and 20 at index 1
console.log(arr3); //Output: [1, 10, 20, "b", 3, 4, 5]
console.log(arr3.indexOf(10)); //Output: 1
console.log(arr3.indexOf(20)); //Output: 2
console.log(arr3.indexOf(99)); //Output: -1 (99 is not in the array)
