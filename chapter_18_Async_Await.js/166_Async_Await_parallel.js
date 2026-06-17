//sequential run:

/*async function apiCall(name) {
    return "Promise"
}

let c = await apiCall();*/


function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 ok")
        }, 2000);
    })
}
apiCall();

async function parallelTest() {
    let [r1, r2, r3] = await Promise.all([
        
        apiCall("Auth Service"),
        apiCall("User account creation"),
        apiCall("Support Page API")
    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);

}
parallelTest();