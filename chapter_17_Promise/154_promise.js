
let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered and food is ready ")
    } else {
        reject("order cancelled becuase of rain.")
    }

})

console.log(order);