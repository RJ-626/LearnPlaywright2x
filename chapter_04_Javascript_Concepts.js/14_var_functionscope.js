
//var is function scoped, it is accessible within the function it is defined in
//var allows redeclaration and reassignment
var a = 10;
console.log(a);

function printHello() {

    var a = 20;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);

    }
    console.log("F->", a);

}

console.log("G->", a);
printHello();