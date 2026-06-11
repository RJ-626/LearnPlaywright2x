
console.log("Test 1 : started");

setTimeout(function () {       //asynchronous , so wait and executed when 2s passed
    console.log("Test 2 : API response received");
}, 2000);

console.log("Test 3 : moving to the next test");

