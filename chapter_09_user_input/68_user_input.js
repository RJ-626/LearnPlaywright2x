let num = prompt("Enter a number:");
num = Number(num); // Convert the input to a number
if (num > 0) {
    console.log("number is positive");
} else if (num < 0) {
    console.log("number is negative");
} else {
    console.log("number is zero");
}
