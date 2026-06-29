class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }

    Open() {
        console.log("Opening the Page");

    }
    close() {
        console.log("Closing the Page");

    }
}

class loginPage extends BasePage {

}

const page = new loginPage();
page.Open();
page.close();