
const user = {
    name: "John",
    age: 36,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user.email);
console.log(user["age"]);

//dynamic property access
const key = "age";
console.log(user[key]);

//adding/modyfying properties
user.city = "NYC";
user.age = 34;
console.log(user);