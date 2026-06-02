//pure function is a function that always produces the same output for the same input and has no side effects (does not modify any external state). Pure functions are easier to test and reason about because they do not depend on or modify any external state. They also help to avoid bugs and make code more predictable.

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); //This will always output 5 because the add function is a pure function that takes two numbers as input and returns their sum. It does not modify any external state and will always produce the same output for the same input.

function getStatusCode(statusCode) {
    return statusCode;
}
console.log(getStatusCode(200)); //This will always output 200 because the getStatusCode function is a pure function that takes a status code as input and returns it. It does not modify any external state and will always produce the same output for the same input.
function logTestName(name) {
    console.log(`Test name: ${name}`);
}
logTestName("Login Test"); //This will always output "Test name: Login Test" because the logTestName function is a pure function that takes a test name as input and logs it. It does not modify any external state and will always produce the same output for the same input.

//impure function - this function modifies the external state by logging to the console, which is a side effect. It does not return a value and its output is not predictable based on its input alone, as it depends on the state of the console and how it handles logging.
function logTestNameImpure(name) {
    console.log(`Test name: ${name}`);
}
logTestNameImpure("Registration Test"); //This will output "Test name: Registration Test" but it is considered an impure function because it has a side effect of logging to the console, which can affect the state of the application and is not predictable based on the input alone.

function generateRandomNumber() {
    return Math.random();
}
console.log(generateRandomNumber()); //This will output a random number between 0 and 1 each time it is called, making it an impure function because it does not produce the same output for the same input and has a side effect of generating a random number.

/*A pure function is like a perfect vending machine:
- You put in the same money and press the same button
- You ALWAYS get the exact same snack
- It doesn't change anything else in the room
An impure function is like a weird vending machine:
- Sometimes you get a snack, sometimes you don't
- It might also accidentally turn off the lights or make noise
- You can't predict exactly what will happen! 


Programmers love pure functions because:
- Easy to test: If add(2,3) ever gives you something other than 5, you know it's broken!
- No surprises: It won't accidentally mess up other parts of your program
- Predictable: Like math homework, the answer is always the same if you do the same steps
Think of it like this: Pure functions are like following a recipe exactly. Impure functions are like cooking while also juggling — something unexpected might happen! 🎪
*/