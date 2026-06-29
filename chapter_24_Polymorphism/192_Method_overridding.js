class BaseTest {
    setup() {
        console.log("Base: Browser opened");

    }
}
class apiTest extends BaseTest {
    setup() {
        console.log("API: Browser opened");

    }

}

let test = new apiTest();
test.setup();