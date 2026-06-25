class BaseTest {
    setup() {
        console.log("Base: open the browser");

    }
    teardown() {
        console.log("Base:close the browser");

    }
} class UITest extends BaseTest {
    setup() {
        super.setup(); //UITest will call your parent function. super()- constructor, used to called parent class method in the child class.
        console.log("UI: maximized window");
    }

    teardown() {
        console.log("UI: take screenshot");
        super.teardown();

    }
}

let u = new UITest();
u.setup();
u.teardown();