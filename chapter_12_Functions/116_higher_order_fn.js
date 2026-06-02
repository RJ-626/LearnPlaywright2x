//higher order functions are functions that can take other functions as arguments or return functions as their result. They are a powerful feature of JavaScript and are commonly used in functional programming.

//Example of a higher-order function that takes another function as an argument
function executeTest(testFn) {
    console.log("Executing test...");
    testFn(); //calling the function passed as an argument
}
//Example of a test function that can be passed to the higher-order function
function loginTest() {
    console.log("Running login test...");
    //test logic goes here
}
executeTest(loginTest); //This will output "Executing test..." followed by "Running login test..." because the executeTest function calls the loginTest function that was passed as an argument.

//Example of a higher-order function that returns another function
function createTestRunner(testName) {
    return function () {
        console.log(`Running ${testName}...`);
        //test logic goes here
    };
}
const runLoginTest = createTestRunner("Login Test");
runLoginTest(); //This will output "Running Login Test..." because the createTestRunner function returns a function that, when called, executes the test logic. The returned function has access to the testName variable through closure, allowing it to use the test name when it is executed.

//2nd example
function runWithLogging(testFn, testname) {
    let result = testFn(); //calling the test function passed as an argument
    console.log(`Test completed: ${testname}`);
    return result;
}

function loginTest2() {
    return "passed";
}
function loginTestFailed() {
    return "failed";
}
runWithLogging(loginTest2, "Login Test"); //This will output "Test completed: Login Test" and return "passed"
runWithLogging(loginTestFailed, "LoginFailed Test"); //This will output "Test completed: LoginFailed Test" and return "failed"