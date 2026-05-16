console.log(c);//reference error because of temporal dead zone
console.log(Hei);
console.log(Hei);
console.log(Hei);
console.log(Hei);
let c = 10;
const Hei = "Hello";
//const is also block scoped and has the same temporal dead zone as let. However, const variables must be initialized at the time of declaration and cannot be reassigned later. This means that once a value is assigned to a const variable, it cannot be changed.