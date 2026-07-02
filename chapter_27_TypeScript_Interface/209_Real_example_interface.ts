interface BasePage {
    url: string;
    title: string;

}

interface LoginPage extends BasePage {
    usernameField: string;
    passwordField: string;
    loginbutton: string;

}

interface FreeTrialPage extends BasePage {
    emailField: string;
    passwordField: string;
    confirmPasswordField: string;
    signupButton: string;
}

let loginPage: LoginPage = {
    url: "https://example.com/login",
    title: "Login Page",
    usernameField: "username",
    passwordField: "password",
    loginbutton: "#loginButton"

};

let freeTrialPage: FreeTrialPage = {
    url: "https://example.com/free-trial",
    title: "Free Trial Page",
    emailField: "email",
    passwordField: "password",
    confirmPasswordField: "confirmPassword",
    signupButton: "#signupButton"
};

console.log("URL of login page: ->", loginPage.url);
console.log("Title of login page: ->", loginPage.title);
console.log("Username field of login page: ->", loginPage.usernameField);

console.log("------------")

console.log("URL of free trial page: ->", freeTrialPage.url);
console.log("Title of free trial page: ->", freeTrialPage.title);
console.log("Email field of free trial page: ->", freeTrialPage.emailField);
console.log("Password field of free trial page: ->", freeTrialPage.passwordField);
console.log("Confirm Password field of free trial page: ->", freeTrialPage.confirmPasswordField);
console.log("Signup button of free trial page: ->", freeTrialPage.signupButton);