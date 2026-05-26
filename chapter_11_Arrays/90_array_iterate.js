//iterate-array
let test_result = ["pass", "fail", "skip", "blocked"];
//using for loop to iterate through the array
for (let i = 0; i < test_result.length; i++) {
    console.log(test_result[i]);
}

console.log("--------------");

//for of loop - iterates through the values of the array
for (result of test_result) {
    console.log(result);
}

console.log("--------------");

//foreach loop- executes a provided function once for each array element
test_result.forEach((result, index) => {

    console.log(result, index); //arrow function - iterates through each element in the test_result array and logs it to the console

});

console.log("--------------");

//for in loop - iterates through the indices of the array
let students = ["Alice", "Bob", "Charlie", "David"];
for (let index in students) {
    console.log(index, students[index]); //Output: 0 Alice, 1 Bob, 2 Charlie, 3 David
}