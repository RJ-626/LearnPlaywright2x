//Generic is a feature of TypeScript that allows you to create reusable components that can work with a variety of data types. It provides a way to define functions, classes, and interfaces that can operate on different types without sacrificing type safety.

function getString(name: string): string {
    return "Amit";
}

getString("Rahul");
//getFirstResult(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

function getFirstResult<T>(results: T[]): T {
    return results[0]!;  //!-non null asserstion operator is used to tell the compiler that the value will not be null or undefined. It is used to avoid the error "Object is possibly 'null' or 'undefined'."
}

let firstStringResult = getFirstResult<string>(["Amit", "Rahul", "John"]); // Explicitly specifying the type parameter as string
let firstNumberResult = getFirstResult<number>([1, 2, 3]); // Explicitly specifying the type parameter as number

console.log(firstStringResult);
console.log(firstNumberResult);