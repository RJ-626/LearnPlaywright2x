interface TestConfig {
    testName: string;
    testDescription: string;
    testSteps: string[];
    expectedResult: string;
    actualResult: string;
    status: string;
    timeout?: number; // Optional property
    retryCount?: number; // Optional property
}

let config1: TestConfig = {
    testName: "Login Test",
    testDescription: "Test the login functionality of the application.",
    testSteps: [
        "Navigate to the login page",
        "Enter valid credentials",
        "Click the login button"
    ],
    expectedResult: "User is logged in successfully",
    actualResult: "User is logged in successfully",
    status: "Open"
};
console.log(config1);

let localConfig: TestConfig = {
    testName: "Signup Test",
    testDescription: "Test the signup functionality of the application.",
    testSteps: [
        "Navigate to the signup page",
        "Enter valid user information",
        "Click the signup button"
    ],
    expectedResult: "User is signed up successfully",
    actualResult: "User is signed up successfully",
    status: "Open",
    timeout: 1000,
    retryCount: 3
};
console.log(localConfig.testName, localConfig.testDescription, localConfig.testSteps, localConfig.expectedResult, localConfig.actualResult,);