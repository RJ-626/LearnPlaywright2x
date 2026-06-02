//if our statuscode >=200 && statuscode <= 300 
function checkStatusCode(statusCode) { //normal function
    if (statusCode >= 200 && statusCode <= 300) {
        return "Success";
    } else {
        return "Error";
    }
}

const checkStatusCodeArrow = function (statusCode) { //function as expression
    if (statusCode >= 200 && statusCode <= 300) {
        return "Success";
    }
else {
    return "Error";
}
}

const checkStatusCodeArrowFn = (statusCode) => { //arrow function
    if (statusCode >= 200 && statusCode <= 300) {
        return "Success";
    } else {
        return "Error";
    }
};