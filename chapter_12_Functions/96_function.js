//function- a block of code that performs a specific task
//function declaration
function greet() {
    console.log("Hello, World!");
}
//calling the function
greet(); //Output: Hello, World!

//function expression
let greet2 = function () {
    console.log("Hello, World!");
}
greet2(); //Output: Hello, World!

//method - a function that is a property of an object
let person = {
    name: "Alice",
    greet: function () {
        console.log("Hello, " + this.name + "!");
    }
};
person.greet(); //Output: Hello, Alice! //The this keyword refers to the object that is calling the method, in this case, person.