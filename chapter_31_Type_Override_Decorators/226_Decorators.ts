function Log(originalMethod: any, context: any) {
    return function (this: any, ...args: any[]) {
        console.log(`Calling ${context.name as string} with arguments:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Result from ${context.name as string}:`, result);
        return result;
    }
}

class calcualtor {
    @Log
    add(x: number, y: number): number {
        return x + y;
    }
}

const calc = new calcualtor();
calc.add(5, 3);