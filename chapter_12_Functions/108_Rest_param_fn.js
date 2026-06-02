//Rest of the parameters are collected into an array
function logResults(name, ...results) {
    console.log(`Test name: ${name}`);
    console.log("Results:");
}
logResults("Login Test", "Passed", "Duration: 120ms", "Screenshot taken");
logResults("Registration Test", "Failed");
