function cafe(item, callwhenTheTableisReady) {
    console.log("finding....1");
    console.log("finding....2");
    console.log("finding....3");
    console.log("finding....4");
    console.log(item);

    callwhenTheTableisReady();
}
function callwhenTheTableisReady() {
    console.log("calling 7012372209");

}

cafe("burger", callwhenTheTableisReady); // 1st way

cafe("Momos", () => { //2nd way
    console.log("calling 2345678");

})

cafe("Pizza", function () { //3rd way
    console.log("calling 2345672348");

})