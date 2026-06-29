interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login valiadtion",
    status: "Passed",
    duration: 1234,
}

console.log("TC--" + test1.id + ": " + test1.name + "-> " + test1.status);
