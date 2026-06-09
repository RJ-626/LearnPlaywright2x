
// *****

// ****

// ***

// **

// *

for (let i = 5; i >= 1; i--) {
    let row = " ";
    for (let j = 1; j >= i; j++) {
        row += "*";
    }
    console.log(row);
}

//2nd method (for less memory)
let row = 5;
for (let i = row; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        process.stdout.write("* ")
    }
    console.log("")
}

//Question 2

//   *

//  ***

// ***** 

for (let i = 0; i < 5; i++) {
    let result = "";
    for (let j = 0; j <= 5 - i; j++) {
        result += " ";
    }
    for (let k = 0; k < (2 * i - 1); k++) {
        result += "*";
    }
    console.log(result);
}