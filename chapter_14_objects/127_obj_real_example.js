
let config = {};

config.browser = "chrome";
config.timeout = 30000;
config.testname = "login test";

console.log(config);

delete config.browser;
console.log(config);

if (config.browser === "chrome") {
    console.log = ("I will execute my Testcases");
}

//alternate way

let config2 = {
browser = "chrome",
timeout = 30000 ,
testname = "login test"

}