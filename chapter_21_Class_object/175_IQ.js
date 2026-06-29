class Browser {

    //param constructor (arguments)
    constructor(name) {

        this.name = name;
        this.isOpen = true;
        console.log(name + " launched ");

    }
    startBrowser() {
        console.log("Starting the browser");
    }
    closeBrowser() {
        console.log("closing the browser");

    }

}

let chrome = new Browser("Chrome")
let firefox = new Browser("Firefox")

console.log(chrome.isOpen);


