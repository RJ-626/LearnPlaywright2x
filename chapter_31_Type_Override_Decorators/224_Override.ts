//override decorator is used to indicate that a method in a derived class is intended to override a method in its base class. It helps catch errors at compile time if the method signature does not match the base class method.

class BaseTest {
    setup(): void {
        console.log("[Base] Open browser");
    }

    teardown(): void {
        console.log("[Base] Close browser");
    }
}

class loginTest extends BaseTest {
    override setup(): void {
        console.log("[Login] Open browser");
        console.log("[Login] Navigate to login page");
    }
}

class ApiTest extends BaseTest {
    override setup(): void {
        console.log("[API] Open browser");
        console.log("[API] Navigate to API page");
    }
}

let test = new loginTest();
test.setup();
test.teardown();

let apiTest = new ApiTest();
apiTest.setup();
apiTest.teardown();

