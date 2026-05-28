
//type-1 functions are the most basic type of functions in JavaScript. They are defined using the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.
//No parameter, No return type-1 function
function greet() {
    console.log("Hello, World!");
}
greet(); //Output: Hello, World! //The function is called using its name followed by parentheses. Since this function does not take any parameters, we simply call it with empty parentheses. The function executes the code inside its block and prints "Hello, World!" to the console.

let a = greet(); //Output: Hello, World! //When we assign the result of calling greet() to a variable a, the function executes and prints "Hello, World!" to the console. However, since the function does not return any value, a will be assigned the value undefined.
console.log(a); //Output: undefined //This is because the greet() function does not have a return statement, so it returns undefined by default.