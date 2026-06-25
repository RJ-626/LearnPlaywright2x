class BaseTest {
    setup() {
        console.log("Base: open the browser");

    }
}

class ApiTest extends BaseTest {
    setup() {
        console.log("APITest: open the browser");
    }
}

let test = new ApiTest();
test.setup(); //will call whose object is created.