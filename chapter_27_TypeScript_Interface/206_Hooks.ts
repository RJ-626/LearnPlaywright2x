interface TestHook {
    (testName: string): void;

}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("Before setting up: " + testName);

}

let afterEachHook: TestHook = function (testName: string): void {
    console.log("After cleaning up: " + testName);
}

beforeEachHook("Login Test");

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login Test",
    status: "Passed",
    duration: 1200
}
console.log(test1);

afterEachHook("Login Test"); 