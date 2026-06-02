//arrow function-

const greet = function (name) {

    return name;
}

let result = greet("Rahul")
console.log(result);

const greet2 = (name) => name; //arrow function 
let r2 = greet2("Alka");
console.log(r2);

const doubleIt = n => n * 2;
console.log(doubleIt(15));

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b; //arrow function

function say() {
    console.log("Hello");
}

const say1 = () => console.log("Hello"); //arrow function
const say2 = () => "Hello"; //arrow function

const greet3 = name => {
    const message = `Hello ${name}`;
    return message;
}