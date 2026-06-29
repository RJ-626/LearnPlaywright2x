# Research: Class and Object in OOP (Object-Oriented Programming)

---

## 1. What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm based on the concept of **"objects"**.
Instead of writing code as a sequence of steps (like in procedural programming), OOP organizes software design around **data (objects)** and the **functions (methods)** that operate on that data.

### Core Principles of OOP:
1. **Encapsulation**
2. **Abstraction**
3. **Inheritance**
4. **Polymorphism**

*(This research focuses on the two building blocks: **Class** and **Object**)*

---

## 2. What is a Class?

A **Class** is a **blueprint** or a **template** for creating objects.

Think of it like a **car design blueprint**. The blueprint itself is not a car, but it defines what a car should have (properties) and what a car can do (behaviors).

### Key Points about Class:
- A class defines **attributes** (also called properties or fields) — what the object has.
- A class defines **methods** (also called functions or behaviors) — what the object can do.
- A class is a **logical entity**.
- Memory is **NOT allocated** when a class is defined.

### Real-Life Analogy:
> **Class = Blueprint of a House**
> It contains the plan (rooms, doors, windows) but it is not a real house.

### Example (JavaScript):
```javascript
class Car {
    // Constructor - special method to initialize object
    constructor(brand, color) {
        this.brand = brand;  // Property
        this.color = color;  // Property
    }

    // Method - what the car can do
    drive() {
        console.log(this.brand + " is driving!");
    }

    stop() {
        console.log(this.brand + " has stopped.");
    }
}
```

---

## 3. What is an Object?

An **Object** is an **instance** of a class.

If a class is a blueprint, the object is the **actual thing built from that blueprint**.

### Key Points about Object:
- An object is a **real-world entity**.
- It is created from a class using the `new` keyword.
- Memory **IS allocated** when an object is created.
- Each object has its **own copy** of the properties defined in the class.
- Multiple objects can be created from a single class.

### Real-Life Analogy:
> **Object = Actual House built from the Blueprint**
> You can build many houses from the same blueprint. Each house is an object.

### Example (JavaScript):
```javascript
// Creating objects (instances) from the Car class
let car1 = new Car("Toyota", "Red");
let car2 = new Car("Honda", "Blue");

// Accessing properties
console.log(car1.brand);  // Output: Toyota
console.log(car2.color);  // Output: Blue

// Calling methods
car1.drive();   // Output: Toyota is driving!
car2.stop();    // Output: Honda has stopped.
```

---

## 4. Relationship Between Class and Object

| Aspect | Class | Object |
|--------|-------|--------|
| Definition | Blueprint / Template | Instance of a Class |
| Memory | No memory allocated | Memory allocated |
| Nature | Logical / Abstract | Physical / Real |
| Declaration | Declared once | Can create many objects |
| Example | `class Car {...}` | `new Car("Toyota", "Red")` |

### Simple Memory Rule:
```
CLASS  →  Blueprint  →  No Memory  →  One Time Definition
OBJECT →  Real Thing →  Memory Used →  Many Can Be Created
```

---

## 5. Why Do We Need Classes and Objects?

1. **Code Reusability**: Write the class once, create many objects from it.
2. **Organization**: Related data and functions are grouped together.
3. **Maintainability**: Easy to update and manage code.
4. **Real-World Modeling**: Helps represent real-world entities in code.

### Example Scenario:
Imagine creating a system for a **School**.

Instead of writing separate code for every student, we create:
- A `Student` **class** with properties like `name`, `rollNumber`, `grade` and methods like `study()`, `takeExam()`.
- Then we create **objects** for each student:
  - `student1 = new Student("Alice", 101, "A")`
  - `student2 = new Student("Bob", 102, "B")`
  - `student3 = new Student("Charlie", 103, "A")`

This saves time and keeps the code clean!

---

## 6. Simple JavaScript Example

```javascript
// Step 1: Define the Class (Blueprint)
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak() {
        console.log(this.name + " makes a sound.");
    }
}

// Step 2: Create Objects (Instances)
let dog = new Animal("Buddy", "Dog");
let cat = new Animal("Whiskers", "Cat");

// Step 3: Use the Objects
dog.speak();  // Output: Buddy makes a sound.
cat.speak();  // Output: Whiskers makes a sound.

console.log(dog.type);  // Output: Dog
console.log(cat.name);  // Output: Whiskers
```

---

## 7. Quick Summary

- **Class** = Blueprint / Design Plan / Cookie Cutter
- **Object** = Real Thing / Actual Product / Cookie
- You **define** a class, then you **create** objects from it.
- A single class can produce **many** objects.
- Objects hold **actual data** and can **perform actions**.

---

## 8. Additional Notes

### Constructor:
A special method inside a class that is automatically called when an object is created. It is used to initialize the object's properties.

### `this` Keyword:
Refers to the **current object** being created or used. It helps access the object's own properties and methods.

### Encapsulation (Related Concept):
Wrapping data (properties) and code (methods) together into a single unit (class). This protects the data from outside interference.

---

**Date of Research:** 21st June 2026

