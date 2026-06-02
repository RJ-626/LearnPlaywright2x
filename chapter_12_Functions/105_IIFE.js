//IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE executed");
})();

(function () {
    //Playwright code to run the tests
    console.log("Playwright code executed");
})();

(() => {
    //Playwright code to run the tests
    console.log("Playwright code executed using arrow function");
})();