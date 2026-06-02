//scope in functions

let env = "production"; //global variable

/*function checkEnvironment() {
    console.log(`Current environment: ${env}`); //accessing global variable inside the function
}
checkEnvironment(); //Current environment: production
function setEnvironment(newEnv) {
    env = newEnv; //modifying global variable inside the function
}
setEnvironment("staging");
checkEnvironment(); //Current environment: staging*/

function setupConfig() {
    let timeout = 5000; //local variable, only accessible within this function
    console.log(env); //accessing global variable inside the function
    console.log(timeout); //accessing local variable inside the function
}

setupConfig();
console.log(env);
console.log(timeout); //production, ReferenceError: timeout is not defined - because timeout is a local variable and cannot be accessed outside the function where it is defined.

