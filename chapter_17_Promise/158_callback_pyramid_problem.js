function openBrowser() {
    return new Promise(function (resolve) {

        //code to open the browser
        resolve("open the browser")
    })
}

function gotollogin() {
    return new Promise(function (resolve) {

        resolve("Login page loaded")
    })
}

function enterCredentials() {
    return new Promise(function (resolve) {

        resolve("Credentials are entered")

    })
}

function ClickLogin() {
    return new Promise(function (resolve) {

        resolve("logged in successfully")
    })
}

openBrowser().then(function (mssg) {
    console.log("Step 1", mssg)
    return gotollogin();
}).then(function (mssg) {
    console.log("Step 2", mssg)
    return enterCredentials();
}).then(function (mssg) {
    console.log("Step 3", mssg)
    return ClickLogin();
}).then(function (mssg) {
    console.log("Step 4", mssg)
}).catch(function (error) {
    console.log({ "Error": error });
}).finally(function () {
    console.log("execution Done");

})

