
function outer() {
    let message = "hello"; //local variable of outer function
    console.log("outer called!");

    function inner() {
        console.log(message); //accessing variable from outer function, this is possible due to closure in JavaScript. The inner function has access to the variables of its outer function even after the outer function has finished executing.

    }
    return inner; //returning the inner function, this allows us to call the inner function outside of the outer function and still have access to the message variable.
}

let innerFunction = outer(); //calling the outer function and storing the returned inner function in a variable
innerFunction(); //calling the inner function, this will log "hello" to the console because the inner function has access to the message variable defined in the outer function due to closure.