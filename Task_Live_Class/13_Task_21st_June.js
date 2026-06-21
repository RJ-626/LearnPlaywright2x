// ============================================================================
// Research: Class and Object in OOP (Object-Oriented Programming)
// Date: 21st June 2026
// ============================================================================

// ----------------------------------------------------------------------------
// 1. What is OOP?
// ----------------------------------------------------------------------------
// Object-Oriented Programming (OOP) is a programming paradigm based on the
// concept of "objects". Instead of writing code as a sequence of steps
// (procedural), OOP organizes software design around data (objects) and the
// functions (methods) that operate on that data.
//
// Core Principles of OOP:
//   1. Encapsulation
//   2. Abstraction
//   3. Inheritance
//   4. Polymorphism
//
// This research focuses on the two building blocks: Class and Object.

// ----------------------------------------------------------------------------
// 2. What is a Class?
// ----------------------------------------------------------------------------
// A Class is a BLUEPRINT or TEMPLATE for creating objects.
//
// Think of it like a car design blueprint. The blueprint itself is not a car,
// but it defines what a car should have (properties) and what a car can do
// (behaviors).
//
// Key Points:
//   - Defines ATTRIBUTES (properties/fields)  -> what the object has
//   - Defines METHODS (functions/behaviors)   -> what the object can do
//   - A class is a LOGICAL entity
//   - Memory is NOT allocated when a class is defined
//
// Real-Life Analogy:
//   Class = Blueprint of a House
//   It contains the plan (rooms, doors, windows) but it is not a real house.

// Example: Defining a Class in JavaScript
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

// ----------------------------------------------------------------------------
// 3. What is an Object?
// ----------------------------------------------------------------------------
// An Object is an INSTANCE of a class.
//
// If a class is a blueprint, the object is the actual thing built from that
// blueprint.
//
// Key Points:
//   - An object is a REAL-WORLD entity
//   - Created from a class using the 'new' keyword
//   - Memory IS allocated when an object is created
//   - Each object has its own copy of the properties
//   - Multiple objects can be created from a single class
//
// Real-Life Analogy:
//   Object = Actual House built from the Blueprint
//   You can build many houses from the same blueprint. Each house is an object.

// Example: Creating Objects (Instances) from the Car class
let car1 = new Car("Toyota", "Red");
let car2 = new Car("Honda", "Blue");

// Accessing properties
console.log("Car1 Brand:", car1.brand);  // Output: Toyota
console.log("Car2 Color:", car2.color);  // Output: Blue

// Calling methods
car1.drive();   // Output: Toyota is driving!
car2.stop();    // Output: Honda has stopped.

// ----------------------------------------------------------------------------
// 4. Relationship Between Class and Object
// ----------------------------------------------------------------------------
//
//   Aspect        | Class                    | Object
//   --------------|--------------------------|--------------------------
//   Definition    | Blueprint / Template     | Instance of a Class
//   Memory        | No memory allocated      | Memory allocated
//   Nature        | Logical / Abstract       | Physical / Real
//   Declaration   | Declared once            | Can create many objects
//   Example       | class Car {...}          | new Car("Toyota", "Red")
//
// Simple Memory Rule:
//   CLASS  -> Blueprint  -> No Memory  -> One Time Definition
//   OBJECT -> Real Thing -> Memory Used -> Many Can Be Created

// ----------------------------------------------------------------------------
// 5. Why Do We Need Classes and Objects?
// ----------------------------------------------------------------------------
//   1. Code Reusability    : Write the class once, create many objects
//   2. Organization        : Related data and functions grouped together
//   3. Maintainability     : Easy to update and manage code
//   4. Real-World Modeling : Helps represent real-world entities in code
//
// Example Scenario: School System
//   Instead of separate code for every student, create a Student class with
//   properties (name, rollNumber, grade) and methods (study(), takeExam()).
//   Then create objects for each student.

// ----------------------------------------------------------------------------
// 6. Another Example: Animal Class
// ----------------------------------------------------------------------------

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

console.log("Dog Type:", dog.type);   // Output: Dog
console.log("Cat Name:", cat.name);   // Output: Whiskers

// ----------------------------------------------------------------------------
// 7. Quick Summary
// ----------------------------------------------------------------------------
//   Class  = Blueprint / Design Plan / Cookie Cutter
//   Object = Real Thing / Actual Product / Cookie
//
//   You DEFINE a class, then you CREATE objects from it.
//   A single class can produce MANY objects.
//   Objects hold ACTUAL DATA and can PERFORM ACTIONS.

// ----------------------------------------------------------------------------
// 8. Additional Notes
// ----------------------------------------------------------------------------
// Constructor:
//   A special method inside a class automatically called when an object is
//   created. It initializes the object's properties.
//
// 'this' Keyword:
//   Refers to the CURRENT OBJECT being created or used. It helps access the
//   object's own properties and methods.
//
// Encapsulation (Related Concept):
//   Wrapping data (properties) and code (methods) together into a single unit
//   (class). This protects data from outside interference.
// ============================================================================
