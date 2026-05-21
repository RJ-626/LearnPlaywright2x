
let value = "5";
console.log(typeof value);
// Output: string

switch (value) {
    case 5:
        console.log("Value is 5");
        break;
    case "5":
        console.log("Value is string 5");
        break;
    default:
        console.log("Value is neither 5 nor string 5");
}