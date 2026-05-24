
let a = 10; //while loop is used when we don't know how many times we want to execute a block of code. It is commonly used when we want to repeat a block of code until a certain condition is met. The while loop will continue to execute the block of code as long as the specified condition is true.
while (a < 10) {
    console.log(a);
    a++;
}



let x = 15; //do while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false. The do-while loop will execute the block of code first and then check the condition. If the condition is true, it will repeat the process; otherwise, it will exit the loop.
do {
    console.log(x);
    x++;
} while (x < 10);