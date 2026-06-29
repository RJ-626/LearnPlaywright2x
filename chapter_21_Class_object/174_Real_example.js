class TestCase {


    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;

    }

    display() {   //Method as it is with in the class
        console.log(this.name + " -> " + this.status + " -> " + this.priority);

    }
}


//functionF1()- function as it is outside the class
let loginTestCase = new TestCase("login Test", "Passed", "P0")
let signupTestCase = new TestCase("Signup Test", "Failed", "P1")

loginTestCase.display();
signupTestCase.display();