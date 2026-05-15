var v = 10;
let l = 20;
const c = 3.14;

var browser = "chrome";
browser = "firefox"; //redeclaration allowed with var
browser = "edge"; //reassignment allowed

//for , function
var testCases = ["login", "logout", "signup",];
for (var i = 0; i < testCases.length; i++) {
    console.log("Running testcase:" + testCases[i]);
}

console.log("Loop counter leaked outside:", i);

console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hello from function");
}


say();
say();