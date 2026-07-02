abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract runTest(): void;
    abstract teardown(): void;
}

class UITest extends BaseTest {
    setup(): void {
        console.log(`Setting up UI test: ${this.testName}`);
    }
    runTest(): void {
        console.log(`Running UI test: ${this.testName}`);
    }
    teardown(): void {
        console.log(`Tearing down UI test: ${this.testName}`);
    }
}
