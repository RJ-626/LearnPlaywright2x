/* Question 1 — HTTP Status Code Categorizer

Problem: Given an HTTP status code, print which category it belongs to.

200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid*/

let statusCode = 404;

if (statusCode >= 200 && statusCode < 300) {
    console.log("Success");
} else if (statusCode >= 300 && statusCode < 400) {
    console.log("Redirection");
} else if (statusCode >= 400 && statusCode < 500) {
    console.log("Client Error");
} else if (statusCode >= 500 && statusCode < 600) {
    console.log("Server Error");
} else {
    console.log("Invalid");
}

/*Question 2 — Test Case Pass/Fail Verdict

Problem: Compare actual result with expected result and print test verdict.*/

let actualResult = "Login successful";
let expectedResult = "Login successful";

if (actualResult === expectedResult) {
    console.log(" ✅ Test Passed");
} else {
    console.log(" ❌ Test Failed");
}

/*Question 3 — Bug Severity Classifier

Problem: Given a bug's impact score (1–10), classify the severity.

9–10 → Critical (block release)

7–8 → High

4–6 → Medium
1–3 → Low

Anything else → Invalid score */

let impactScore = 8;

if (impactScore >= 9 && impactScore <= 10) {
    console.log("Critical (block release)");
} else if (impactScore >= 7 && impactScore <= 8) {
    console.log("High");
} else if (impactScore >= 4 && impactScore <= 6) {
    console.log("Medium");
} else if (impactScore >= 1 && impactScore <= 3) {
    console.log("Low");
} else {
    console.log("Invalid score");
}

/* Problem: Given the percentage of test cases passed in a CI build, report build health.

100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)*/

let percentagePassed = 85;

if (percentagePassed === 100) {
    console.log("Green Build");
} else if (percentagePassed >= 90 && percentagePassed < 100) {
    console.log("Stable (investigate failures)");
} else if (percentagePassed >= 70 && percentagePassed < 90) {
    console.log("Unstable");
} else if (percentagePassed < 70) {
    console.log("Broken Build (block deployment)");
}

/* Question 5 — Login Lockout After Failed Attempts

Problem: Track failed login attempts. Lock the account after 3 failed attempts.*/
let login_attempts = 0;

if (login_attempts >= 3) {
    console.log(" 🔒 Account locked - Contact support.");
} else if (login_attempts === 2) {
    console.log("1 attempt left before lockout.");
} else if (login_attempts === 1) {
    console.log("2 attempts left before lockout.");
} else {
    console.log("Login successful");
}