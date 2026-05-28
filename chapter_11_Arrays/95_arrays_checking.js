//checking arrays - The Array.isArray() method is used to determine whether the passed value is an Array. It returns true if the value is an Array, and false otherwise.

let arr = [1, 2, 3];
console.log(Array.isArray(arr)); //Output: true

let notAnArray = "I am a string";
console.log(Array.isArray(notAnArray)); //Output: false


//every & some - The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. The some() method tests whether at least one element in the array passes the test implemented by the provided function. It also returns a Boolean value.

let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); //Output: true

let somePositive = numbers.some(num => num > 0);
console.log(somePositive); //Output: true

let allGreaterThanThree = numbers.every(num => num > 3);
console.log(allGreaterThanThree); //Output: false

let someGreaterThanThree = numbers.some(num => num > 3);
console.log(someGreaterThanThree); //Output: true

//playwright API provides a method called isArray() to check if a given value is an array. This method is part of the Playwright API and can be used in your tests to verify if a variable is an array.
[201, 200, 204, 400, 404].every(status => status >= 200); //Output: true (because all values are greater than or equal to 200)
[201, 200, 204, 400, 404].some(status => status >= 200); //Output: true (because 201, 200, and 204 are greater than or equal to 200)