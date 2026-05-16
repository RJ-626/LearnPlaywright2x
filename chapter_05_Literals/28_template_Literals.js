
let firstname = "RRRaahhul";
let lastname = "Jaiswal";
let fullName = `${firstname} ${lastname}`; //template literal using backticks and interpolation
console.log(fullName); //RRRaahhul Jaiswal


let env = "staging";
env = "production"; //this will work because env is declared with let, which allows reassignment
const apiUrl = `https://${env}.example.com/api`;
console.log(apiUrl); //https://production.example.com/api

//Playwright test example using template literals
const rowIndex = 5;
const columnIndex = 3;
const cellId = `cell-${rowIndex}-${columnIndex}`;
console.log(cellId); //cell-5-3

//Login test example
const testName = "Login Test";
const status = "Failed";
const message = `Test "${testName}" has ${status}`;
console.log(message); //Test "Login Test" has Failed

const test = "checkoutflow";
const timestamp = Date.now();
const logMessage = `Test "${test}" executed at ${new Date(timestamp).toLocaleTimeString()}`;
console.log(logMessage); //Test "checkoutflow" executed at 10:30:45 AM
const result = "passed";
console.log(`The ${test} has ${result}`); //The checkoutflow has passed