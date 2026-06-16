let checkAuth = Promise.resolve("Auth ok");
let checkDB = Promise.resolve("DB ok");
let checkCache = Promise.resolve("Cache ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("ALL the checks are Fine!");

})

Promise.all([

    Promise.resolve("Auth ok"),
    Promise.reject("DB down"),
    Promise.resolve("OK")
]).then(function (r) {
    console.log(r);
}).catch(function (error) {
    console.log("Failed", error);

})

Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B Failed!"),
    Promise.resolve("Test c Passed!"),
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test" + (i + 1) + ":", r.status, "-", r.value || r.reason);

    })
})