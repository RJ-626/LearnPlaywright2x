const obj = { a: 1, b: 2 }
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//iterate
const user = { name: "Rahul, age:33" };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
