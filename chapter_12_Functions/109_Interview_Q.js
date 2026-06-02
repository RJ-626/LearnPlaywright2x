
function getStausCode(status) {
    if (status >= 200 && status < 300) return "Success";
    if (status >= 400 && status < 500) return "Client Error";
    if (status >= 500 && status < 600) return "Server Error";
    return "Unknown Status";
}
getStausCode(200);

function logTestName(name) {
    console.log(`Test name: ${name}`);
    //no return statement, so it returns undefined by default
}
let result = logTestName("Login Test");
console.log(result); //undefined - without return type we can not assign the result to a variable and use it later in the code.


greet("Alice"); //normal function call before the function declaration, this is possible due to function hoisting in JavaScript. The function declaration is hoisted to the top of its scope, allowing it to be called before it is defined in the code.
function greet(name) {
    console.log(`Hello, ${name}!`);
}


sayHello("Bob"); //This will throw an error because sayHello is a function expression and is not hoisted. The variable sayHello is hoisted, but it is initialized with undefined until the assignment is executed. Therefore, when we try to call sayHello before its definition, it results in a TypeError since we are trying to call undefined as a function.
const sayHello = function (name) {
    console.log(`Hello, ${name}!`);
}

const sayHi = (name) => {
    console.log(`Hi, ${name}!`);
}
sayHi("Charlie"); // This will work because arrow functions are also hoisted (though not initialized until the assignment is executed)


sayHi2("Barlie"); //This will throw an error because sayHi2 is an arrow function and is not hoisted. Similar to function expressions, the variable sayHi2 is hoisted but initialized with undefined until the assignment is executed. Therefore, when we try to call sayHi2 before its definition, it results in a TypeError since we are trying to call undefined as a function.
const sayHi2 = (name) => {
    console.log(`Hi, ${name}!`);
}

