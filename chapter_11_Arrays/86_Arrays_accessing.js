
//accessing and modyfying array elements
let status = ["active", "inactive", "pending", "completed"];
console.log(status[0]); //Output: active
console.log(status[2]); //Output: pending
console.log(status[4]); //Output: undefined

status[2] = "in progress";
console.log(status); //Output: ["active", "inactive", "in progress", "completed"]

console.log(status.at(-1)); //Output: completed
console.log(status.at(-2)); //Output: in progress
console.log(status.at(-5)); //Output: undefined

//modifying array elements using index
status[1] = "archived";
console.log(status); //Output: ["active", "archived", "in progress", "completed"]




