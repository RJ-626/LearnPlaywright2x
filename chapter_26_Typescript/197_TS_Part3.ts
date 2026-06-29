let unknown: unknown = "Hello";

if (typeof unknown === "string") {
    console.log("Hi");

}

let mesage: string = "Hello";

let username: string;
let userID: number;

//function annotations
function greet(name: string): string {
    return `Hello,${name}!`;
}

//Arrow function annotations
const multiply = (a: number, b: number): number => a * b;

//object annotations
let user: { name: string; age: number } = {
    name: "john",
    age: 30
}