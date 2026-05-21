
let statusCode = 304;
if (statusCode === 200) {
    console.log("API call successful");
} else if (statusCode === 404) {
    console.log("API Not Found");
} else {
    console.log("API Error");
}