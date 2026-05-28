
function greet1(name) {
    return `Hello, ${name}`;
}
let result = greet1("Rahul");
console.log(result);



//function as expression-
const greet2 = function (name) {
    return (`hello, ${name}`);
}

let r = greet2("Alka");
console.log(r);

console.log(greet1("Bob"));
console.log(greet2("Bob"));

