function getToken() {
    return Promise.resolve("123abc")
}

//page.goto()----> Promise in playwright


async function run() {
    let token = await getToken();
    console.log(token);
    //whenever a function return promise , always use await.in fornt of the function
}
run();