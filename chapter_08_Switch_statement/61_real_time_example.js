
let responseCode = 404;

switch (responseCode) {
    case 200:
        console.log("API call successful");
        break;
    case 404:
        console.log("Resource not found");
        break;
    case 500:
        console.log("Internal server error");
        break;
    default:
        console.log("Unknown response code");
}