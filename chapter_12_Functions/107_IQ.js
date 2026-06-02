function runTest(name, status, duration) {
    return `Test name: ${name}, Status: ${status}, Duration: ${duration}`;
}
const r= (runTest("Login Test", "Passed", 120));
console.log(r);