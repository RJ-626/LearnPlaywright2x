let fruits = ["apple", "cherry", "banana", "orange"];
fruits.sort();
console.log(fruits); //Output: ["apple", "banana", "cherry", "orange"]


let number = [3, 1, 2, 6, 4]; //normal sorting
number.sort();
console.log(number); //Output: [1, 2, 3, 4, 6]

let num = [1, 10, 45, 41, 3, 11, 12]; //lexicographical sorting (natural sorting)
num.sort();
console.log(num); //Output: [1, 10, 11, 12, 3, 41, 45] //The sort() method sorts the elements as strings by default, which is why 10 comes before 3. To sort numbers correctly, you can provide a compare function:

num.sort((a, b) => a - b); //arrow function-> a - b is a compare function that sorts numbers in ascending order. If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, the order of a and b remains unchanged.
console.log(num); //Output: [1, 3, 10, 11, 12, 41, 45]
num.sort((a, b) => b - a); //arrow function-> b - a is a compare function that sorts numbers in descending order. If the result is negative, b is sorted before a. If the result is positive, a is sorted before b. If the result is 0, the order of a and b remains unchanged.
console.log(num); //Output: [45, 41, 12, 11, 10, 3, 1]
