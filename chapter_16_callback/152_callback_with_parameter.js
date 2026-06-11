function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();

}

greetTester("Rahul", function () {
    console.log("Lets start Testing!!");
});

//callback with parameter

function runTest(testname, callback) {
    let status = "Pass";
    callback(testname, status);

}
runTest("login test", function (name, result) {
    console.log(name + "-> " + result);

})

//Sync callback -forEach

let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug);

});

console.log("Total Bugs: " + bugs.length);
