interface Executable {
    name: string;
    id: number;
    run(): void;
    getStatus(): string;
}

class TestCase implements Executable {
    name: string;
    id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    run(): void {
        console.log(`Running test case: ${this.name} with ID: ${this.id}`);
    }
    getStatus(): string {
        return "Test case status: Passed";
    }
}

let tc: Executable = new TestCase("Verify Login Test", 1);
tc.run();
console.log(tc.getStatus());