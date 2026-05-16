//let is block scoped, which means that it is only accessible within the block in which it is declared. This is different from var, which is function scoped and can be accessed outside of the block in which it is declared.

let x = "global";
if (true) {

    //console.log(x); //global (let is not hoisted, so it is not accessible before it is declared)

    let x = "block";
    console.log(x); //block
}

console.log(x); //global (the block scoped variable does not affect the global variable)
