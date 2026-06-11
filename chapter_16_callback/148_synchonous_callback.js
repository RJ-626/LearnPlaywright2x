
let testResults = ["Pass", "Fail", "Pass", "Skip"]

testResults.forEach(function (results, index) {
    console.log("Test " + index + "=> " + results);

}); //synchronous callback , will take the index one by one and result one by one .