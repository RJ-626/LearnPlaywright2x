class TestCase {
    execute() {
        console.log("Running generic test");

    }
}

class unitTest extends TestCase {
    execute() {
        console.log("Running unit test - checking one function");

    }
}

class APITest extends TestCase {
    execute() {
        console.log("Running API test - checking one function");

    }
}
class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E test - checking one function");

    }
}

let tests = [new unitTest(), new APITest(), new E2ETest()]

tests.forEach(function (test) {
    test.execute();
})