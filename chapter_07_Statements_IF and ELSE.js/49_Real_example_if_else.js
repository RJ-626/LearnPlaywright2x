
let isLoggedIn = false;
let userRole = "admin";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome, admin! you have full access.");
    } else if (userRole === "editor") {
        console.log("Welcome, editor! you have limited access.");
    } else {
        console.log("Welcome, user! you have basic access.");
    }
} else {
    console.log("Please log in.");
}