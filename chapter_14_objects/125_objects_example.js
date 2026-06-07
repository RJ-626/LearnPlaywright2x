
let student1 = { name: "Rahul", age: 31 };
let student2 = { name: "John" };
let student = { name: "Roma", age: 29, city: "Patna" };

let a = { status: "Pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: "Pass" };
console.log(a1.status);

//copy by reference 
let b = a;
b.status = "fail";
console.log(b.status);
console.log(a.status); //value changed