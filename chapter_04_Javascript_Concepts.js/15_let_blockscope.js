//let is blockscoped, it is only accessible within the block it is defined in
//let does not allow redeclaration but allows reassignment

let a = 10;
console.log(a);

function printHello() {

    let a = 20;
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);

    }
    console.log("F->", a);
    console.log("G->", a);
}

printHello();