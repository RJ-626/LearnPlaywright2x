
let browser = "xyz";
switch (browser) {
    case "chrome":
    case "edge":
    case "brave":
        console.log("Using Chromium product");
        break;
    case "firefox":
        console.log("Using Mozilla product");
        break;
    case "safari":
        console.log("Using Safari product");
        break;
    default:
        console.log("Unknown browser");
}