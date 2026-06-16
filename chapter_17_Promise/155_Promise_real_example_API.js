let API_call = new Promise(function (resolve, reject) {

    resolve({

        status: 200, body: "user data"
    })

})

API_call.then(function (response) {

    console.log(response);
    console.log(response.status);
});
 //.then only runs when promise is resolved successfully.