
//default parameter function
function retry(testname, retries = 3, maximum_delays = 1000) {
    console.log(`Test name: ${testname}`);
    console.log(`Retries: ${retries}`);
    console.log(`Maximum delays: ${maximum_delays}`);
}
retry("Login Test");


function retry(testname, retries = 3, maximum_delays = 1000) {
    console.log(`Test name: ${testname}`);
    console.log(`Retries: ${retries}`);
    console.log(`Maximum delays: ${maximum_delays}`);
}
retry("Registration Test", 5, 2000);
