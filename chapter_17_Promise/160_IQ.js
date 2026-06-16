let p = new Promise(function (resolve, reject) {
    resolve(42);

});

p.then(function (value) {
    console.log("Answer:", value);

});

let R = new Promise(function (resolve, reject) {
    reject("something broke!")
})
R.catch(function (err) {
    console.log("Caught:", err);

})

let Q = Promise.resolve(5);
Q.then(function (value) {
    return value * 10;
}).then(function (value) {
    console.log("Result:", value);

})

Promise.resolve(1)
    .then(function (val) {
        console.log(val);
        return val + 1;

    })
    .then(function (val) {
        console.log(val);
        return val + 1;
    })
    .then(function (val) {
        console.log(val);
    })

Promise.resolve("start")
    .then(function (value) {
        console.log(value);
        throw new Error("Broke at step 2");

    })
    .then(function () {              //due to throw , it will not be executed
        console.log("This will not run");

    })
    .catch(function (err) {
        console.log("Caught:", err.message);

    })

Promise.reject("Test Failed")
    .then(function (data) {
        console.log("Data:", data);

    })
    .catch(function (err) {
        console.log("Error:", err);

    })
    .finally(function () {
        console.log("Cleanup Done");

    })

Promise.resolve("Quick win").then(function (msg) {
    console.log(msg);

})
Promise.reject("Quick loss").catch(function (msg) {
    console.log(msg);
})

let t1 = Promise.resolve("Login: Pass")
let t2 = Promise.reject("Search: Fail")
let t3 = Promise.resolve("Logout: Pass")
Promise.all([t1, t2, t3]).then(function (r) {
    console.log("All:", r);

}).catch(function (err) {
    console.log("Stopped:", err);

})

