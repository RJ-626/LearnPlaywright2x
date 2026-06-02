function makeRetryTracker(maxRetries) { // This function creates a closure that tracks the number of retries for a test
    let retries = 0; // This variable will keep track of the number of retries, and it is defined in the outer function so that it can be accessed and updated by the inner function

    function retry(testname) { // This inner function will have access to the retries variable defined in the outer function due to closure
        retries++;
        if (retries > maxRetries) {
            return ("Max retries reached. No more attempts allowed.")
        } else {
            return (`Retrying... Attempt ${retries} for test: ${testname}`);

        }
    }

    return retry; // Returning the inner function allows us to call it outside of the outer function and still have access to the retries variable, which is updated each time the inner function is called.
}

let retryLoginTest = makeRetryTracker(3);// Creating a retry tracker for the login test with a maximum of 3 retries
console.log(retryLoginTest("Login Test"));
console.log(retryLoginTest("Login Test"));
console.log(retryLoginTest("Login Test"));
console.log(retryLoginTest("Login Test")); 
