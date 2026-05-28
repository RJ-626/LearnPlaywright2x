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