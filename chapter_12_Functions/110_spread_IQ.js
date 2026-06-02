
function add(a, b, c) {
    return a + b + c;
}
let numbers = [1, 2, 3];
console.log(add(...numbers)); //spread operator is used to spread the elements of the array as individual arguments to the function. This allows us to pass the elements of the array as separate parameters to the function, rather than passing the entire array as a single argument. In this case, it will output 6, which is the sum of 1, 2, and 3.

let responseCode = [200, 404, 500];
console.log(getStatusCode(...responseCode)); //This will output "Success" because the first element of the responseCode array is 200, which falls within the range of 200 to 299, indicating a successful status code. The spread operator is used to pass the elements of the responseCode array as individual arguments to the getStatusCode function, allowing it to evaluate the first status code and return the corresponding status message.

function hasError(...statusCodes) {
    return statusCodes.some(code => code >= 400);
}
hasError(200, 404, 500); //This will return true because the function checks if any of the status codes passed as arguments are greater than or equal to 400. In this case, both 404 and 500 are greater than or equal to 400, indicating that there is an error status code present. The spread operator allows us to pass multiple status codes as individual arguments to the hasError function, which then evaluates them using the some method to determine if any of them indicate an error.