

//logical+ if else statement
let userName = "Dev";
let password = "secure123";
let accountLocked = true;
if (userName === "Dev" && password === "secure123") {
    if (!accountLocked) {
        console.log("Login successful!");
    } else {
        console.log("Account is locked.");
    }
} else {
    console.log("Invalid username or password.");
}