//Primitive types

let name: string = "john";
let age: number = 32;
let pi: number = 3.14;
let distance_to_Moon = 9876543210.23;
//let pi: float = 3.14 (only number type, no float)

let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;


//Arrays
let number: number[] = [1,2,3];
let names: Array<string> = ["John", "Parker"];

//Any (avoid when possible)
let anything: any = "hello";

//unknown (safer than any)
let unknown: unknown = "hello";


let message: string = "Hello"
let count: number = 45;
//let isActive: boolean = false;
console.log("Message:", message);
console.log("Count:", count);

