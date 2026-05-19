//null operators
let a = null;
console.log(a); // Output: null

//nullish coalescing operator (??)
let b = null;
let c = b ?? "Default value";
console.log(c); // Output: Default value

let d = undefined;
let e = d ?? "Default value";
console.log(e); // Output: Default value

let amul = "available";
let milk_purchase = amul ?? "Nandini";
console.log(milk_purchase); // Output: available

let f = 0;
let g = f ?? 10;
console.log(g); // Output: 0 (because 0 is not null or undefined)