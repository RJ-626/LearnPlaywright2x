
if ("hello") console.log("String is truthy");
if (123) console.log("Non-zero number is truthy");
if (false) console.log("Boolean false is falsy");
if (0) console.log("Zero is falsy");
if ("") console.log("Empty string is falsy");
if (null) console.log("Null is falsy");
if (undefined) console.log("Undefined is falsy");
if (NaN) console.log("NaN is falsy");
if ([]) console.log("Empty array is truthy");
if ({}) console.log("Empty object is truthy");
if (null) console.log("Null is falsy");

let name = (undefined);
if (name) {
    console.log("Name is defined");
} else {
    console.log("Name is not defined");
}