//Modulus operator (%) returns the remainder of a division operation. It is often used to determine if a number is even or odd, or to wrap around values within a certain range.

let x = 10;
let y = 3;
console.log(x % y); //1


let y = 14;
let z = 7;
console.log(y % z); //0


//Example: Check if a number is even or odd
let num = 7;
if (num % 2 === 0) {
    console.log(num + " is even.");
} else {
    console.log(num + " is odd.");
}