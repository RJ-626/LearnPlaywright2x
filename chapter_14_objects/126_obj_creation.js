
let c = { status: "pass" };
let d = { status: "pass" }; //created in a heep at different position, so they are not same as refrences are different 
console.log(c);
console.log(d);
if (c === d) {
    console.log("true");
} else {
    console.log("false");
}