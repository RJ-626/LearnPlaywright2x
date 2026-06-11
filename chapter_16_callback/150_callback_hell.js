//Real QA scenarios- end to end login 

//open browser
//gotologinPage()
//enter the credentials
//click on login/signin button

function openBrowser(callback) {
    console.log("opening the chrome browser");

    setTimeout(function () {
        callback();
    }, 1000);
}

function goToLoginPage(callback) {
    console.log("Login page loaded");

    setTimeout(function () {
        callback();
    }, 500);
}
function enterCredentials(callback) {
    console.log("credentials entered");

    setTimeout(function () {
        callback();
    }, 1000);
}
function clickLoginButton(callback) {
    console.log("click the login button");

    setTimeout(function () {
        callback();
    }, 1000);
}

//This is CAllback hell example
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLoginButton(function () {
                console.log("Test completed!!");

            })
        })
    })
})