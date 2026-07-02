//Enumerator is a special type in TypeScript that allows you to define a set of named constants. It can be used to represent a collection of related values, making your code more readable and maintainable.

//Interface is a way to define the structure of an object in TypeScript. It allows you to specify the properties and their types that an object should have. Interfaces help enforce type safety and provide better code organization.

enum TestStatus {
    Passed = "Passed",
    Failed = "Failed",
    Skipped = "Skipped",
    Blocked = "Blocked"
}
console.log(`Test Status: ${TestStatus.Passed}`);