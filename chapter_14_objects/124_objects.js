
//objects-in JavaScript, are collections of properties, where each property is a key-value pair. They can be used to store and organize data in a structured way. Here's an example of how to create and use objects in JavaScript:
//creating an object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

//accessing object properties
console.log(person.name);
console.log(person.age);
console.log(person.city);

//adding a new property to the object
person.country = "USA";
console.log(person.country);

//updating an existing property
person.age = 31;
console.log(person.age);

//deleting a property from the object
delete person.city;
console.log(person.city); //undefined

let person1 = {    //JSON , not object - keys will not be in double quote in objects.
    "name": "John",
    "age": 30,
    "city": "New York"
}

let person2 = ["rahul", 30, "New York"] //array, not object

let test_obj_reference = { name: "John", age: 30, city: "New York" }; //this is a reference to the same object in memory, not a copy of the object. So, if we change the properties of test_obj_reference, it will also change the properties of person, because they are both referencing the same object in memory.
