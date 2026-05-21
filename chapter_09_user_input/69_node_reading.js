const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (num) {
    num = Number(num);
    if (num > 0) {
        console.log("number is positive");
    } else if (num < 0) {
        console.log("number is negative");
    } else {
        console.log("number is zero");
    }
    rl.close();
});