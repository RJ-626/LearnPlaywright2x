//premitive vs refrence types
//premitive - number, string, boolean, undefined, null etc.
let a = 10;
let b = a;
b = 99;
console.log(b);
console.log(a);

//objects- copied by refrence, call by ref
//Refrence- object, array, function

let obj1 = { val: 20 }
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val); //obj1 value is chnged with the chnge of obj2 value as it is copied by reference.