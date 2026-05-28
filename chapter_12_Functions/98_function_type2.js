//type-2 functions are functions that take parameters and do not return a value.
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); //Output: Hello, Alice! //When we call the greet function with the argument "Alice", it executes the code inside the function block and prints "Hello, Alice!" to the console. Since this function does not have a return statement, it returns undefined by default.

let b = greet("Bob"); //Output: Hello, Bob! //When we assign the result of calling greet("Bob") to a variable b, the function executes and prints "Hello, Bob!" to the console. However, since the function does not return any value, b will be assigned the value undefined.
console.log(b); //Output: undefined //This is because the greet("Bob") function does not have a return statement, so it returns undefined by default.

function beggar(money) {
    console.log("Thanks", money);
}
beggar(5); //Output: Thanks 5

let returnSomething = beggar(10); //Output: Thanks 10 //When we assign the result of calling beggar(10) to a variable returnSomething, the function executes and prints "Thanks 10" to the console. However, since the function does not return any value, returnSomething will be assigned the value undefined.
console.log(returnSomething); //Output: undefined //This is because the beggar(10) function does not have a return statement, so it returns undefined by default.