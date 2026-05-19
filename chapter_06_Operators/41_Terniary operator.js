//terniary operator --> //condition ? true : false;
let age = 20;
let isAdult = age >= 18 ? true : false;
console.log(isAdult); // Output: true

// Example with a string
let time = 10;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting); // Output: Good morning

let Rahul_age = 12;
let Rahul_will_go_to_Goa = Rahul_age >= 18 ? "Yes, Rahul will go to Goa " : "No, Rahul will not go to Goa";
console.log(Rahul_will_go_to_Goa); // Output: No, Rahul will not go to Goa

let actualStatusCode = 200;
let expectedStatusCode = 200;
let responseStatus = actualStatusCode === expectedStatusCode ? "Success" : "Failure";
console.log(responseStatus); // Output: Success

let environment = "staging";
let apiUrl = environment === "production" ? "https://api.production.com" : "https://api.staging.com";
console.log(apiUrl); // Output: https://api.staging.com

let CI = true;
let browser_mode = CI ? "Headless mode" : "Headed mode";
console.log(browser_mode); // Output: Headless mode

let response_time = 150;
let sla_time = 800;
let sla_status = response_time <= sla_time ? "Within SLA" : "SLA Breached";
console.log(`Response : ${response_time} ms - ${sla_status}`); // Output: Response time: 150 ms - Within SLA

//Nested ternary operator --> terniary inside terniary
let userRole = "admin";
let accessLevel = userRole === "admin" ? "Full Access" : userRole === "user" ? "Limited Access" : "No Access";
console.log(accessLevel); // Output: Full Access

let age_Rahul = 21;
let Rahul_will_be_able_to_drink = age_Rahul > 18 ? (age_Rahul > 25 ? "Yes, Rahul can drink" : "No, Rahul cannot drink") : "No, Rahul cannot go to Goa";
console.log(Rahul_will_be_able_to_drink); // Output: No, Rahul cannot drink

let statusCode = 404;
let statusMessage = statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Server Error";
console.log(statusMessage); // Output: Client Error

let a = 10;
let b = 20;
let c = 30;
let largest = a > b ? (a > c ? "a is largest" : "c is largest") : (b > c ? "b is largest" : "c is largest");
console.log(largest); // Output: c is largest

let x = 25;
let y = 15;
let largestNumber = x > y ? "x is larger" : "y is larger";
console.log(largestNumber); // Output: x is larger