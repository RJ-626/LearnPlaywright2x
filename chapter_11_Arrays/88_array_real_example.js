
let browsers = ["Chrome", "Firefox", "Safari", "Edge"];
console.log(browsers); //Output: ["Chrome", "Firefox", "Safari", "Edge"]
console.log(browsers.length); //Output: 4
console.log(browsers[0]); //Output: Chrome

browsers.pop(); //removes the last element
console.log(browsers); //Output: ["Chrome", "Firefox", "Safari"]

browsers.push("Opera"); //adds "Opera" to the end of the array
console.log(browsers); //Output: ["Chrome", "Firefox", "Safari", "Opera"]

let removed=browsers.shift(); //removes the first element (Chrome) from the array
console.log(removed); //Output: Chrome
console.log(browsers); //Output: ["Firefox", "Safari", "Opera"]

for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]); //Output: Firefox, Safari, Opera
    if(browsers[i] === "Opera"){
        console.log("Opera is removed from selenium!"); //Output: Opera is removed from selenium!
    }
}