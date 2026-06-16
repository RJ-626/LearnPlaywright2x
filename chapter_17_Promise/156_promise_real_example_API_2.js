let API_call = new Promise(function (resolve, reject) {

    reject("500 error");

})

API_call.then(function (data) {
    console.log("Success or Resolve");
}).catch(function (error) {
    console.log(error);

})

//.catch only runs when the promise is rejected 
//.then() is completely skipped.