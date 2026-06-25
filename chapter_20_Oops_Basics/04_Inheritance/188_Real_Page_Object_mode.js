class BasePage {
    verify() {
        console.log("Verifying Base Page");

    }
}

class LoginPage extends BasePage {

    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");

    }
}

class DashBoard extends BasePage {
    verify() {
        console.log("verify: welcome message shown");
        console.log("verify: sidebar menu loaded")

    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");

    }
}

let pages = [new LoginPage(), new DashBoard(), new CartPage()];

pages.forEach(function (page) {
    page.verify();
    console.log("---");
})