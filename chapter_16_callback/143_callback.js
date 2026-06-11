
function print() {
    console.log("normal function");

}

function placeOrder(item, callback) {
    console.log("Hi, your order is placed");
    callback();

}
//first way to call
placeOrder("Pizza", print) //direct call

//2nd way to call
placeOrder("Burger", function () {  //anonymus function
    console.log("Hi, How are you");
});

//3rd way to call
placeOrder("Momos", () => {  //arrow function
    console.log("Hi, I am arrow function")
});