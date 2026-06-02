
let g_x=10;
//nested functions and scope
function outer() {
    let x=20;

function inner() {
    let y=30;
    console.log(x); //20 - this will log the value of x defined in the outer function, which is 20. The inner function cannot access the local variable x of the outer function.
}
inner();
console.log(y); //ReferenceError: y is not defined - this will throw an error because y is a local variable defined in the inner function and cannot be accessed outside of it, including in the outer function.
}