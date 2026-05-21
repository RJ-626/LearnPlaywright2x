let status = 0;
console.log(typeof status); // number

switch (status) {
    case false:
        console.log("status is false");
        break;
    case 0:
        console.log("status is 0");
        break;
    default:
        console.log("status is neither false nor 0");
}