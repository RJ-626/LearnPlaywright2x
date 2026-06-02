
function makeCounter(start = 0) {
    let count = start; //local variable to keep track of the count, initialized with the start value passed as an argument to the function

    return { //returning an inner function that will have access to the count variable due to closure
        increament() { count++ }, //incrementing the count variable each time the inner function is called
        decreament() { count-- }, //decrementing the count variable each time the inner function is called
        get() { return count; } //returning the updated count value
    }
}

let counter = makeCounter(0); //creating a counter object with the initial count value of 5
counter.increament(); //incrementing the count, count is now 1
counter.increament();
counter.increament();
getCount = counter.get(); //getting the current count value, which is 3
console.log(getCount);
counter.decreament(); //decrementing the count, count is now 2
console.log(counter.get());