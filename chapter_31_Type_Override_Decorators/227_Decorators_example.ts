function logged(originalMethod: any, context: any): any {
    return function (this: any, ...args: any[]) {
        console.log("called");
        return originalMethod.call(this, ...args);
    }
}

class greeter {

    @logged
    hello() {
        return "Hello, world!";
    }
}

let r = new greeter().hello()
console.log(r); // Output: Hello, world!
