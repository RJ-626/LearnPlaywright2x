//let is blockscoped, it is only accessible within the block it is defined in
//let does not allow redeclaration but allows reassignment

let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry count is:", retryCount);

//let retryCount = 5; does not allow redeclaration

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);

}
//console.log(executionTime); //ReferenceError: executionTime is not defined
/*
Block example
{}
if(){}
function(){}*/

let name = "Rahul";
name = "Pramod";
console.log(name);


let name = "Rahul";
name = "Pramod";
{
    let name = "Dutta";
    console.log(name);
}