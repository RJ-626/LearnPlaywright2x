let testRun = new Promise(function (resolve, reject) {
    let api_Call = true;
    if (api_Call) {
        resolve({ "Staus": "Done" })

    } else {
        reject("assertion failed");
    }

});

testRun.then(function (data) {
    console.log(data);

}).catch(function (error) {
    console.log(error);

}).finally(function (response) {             //This code will be executed any how 
    console.log("I will be executed any how! ");

})