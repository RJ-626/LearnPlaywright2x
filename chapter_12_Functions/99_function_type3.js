//Type-3 - Functions with no parameters and return type. These functions can't take parameters but return a value. They are defined using the function keyword, followed by the function name,  enclosed in parentheses, and a block of code enclosed in curly braces.

function greet() {
    console.log("Hi,How are you")
    return ("hello");
}

let relative = greet()
console.log(relative);