interface BugReport {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    stepsToReproduce: string[];
}

const bugReport1: BugReport = {
    id: 1,
    title: "Login button not working",
    description: "The login button is not responding when clicked.",
    status: "Open",
    createdAt: new Date(),
    updatedAt: new Date(),
    stepsToReproduce: [
        "Navigate to the login page",
        "Enter valid credentials",
        "Click the login button"
    ]
};
console.log(bugReport1);

const bugReport2: BugReport = {
    id: 2,
    title: "Page crashes on submit",
    description: "The page crashes when the user submits the form.",
    status: "Open",
    createdAt: new Date(),
    updatedAt: new Date(),
    stepsToReproduce: [
        "Navigate to the form page",
        "Fill in all required fields",
        "Click the submit button"
    ]
};
console.log(bugReport2);