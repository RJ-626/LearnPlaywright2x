
console.log(0 == ""); //true (loose equality allows type coercion)
console.log(0 === ""); //false (strict equality does not allow type coercion)

console.log(0 == "0"); //true (loose equality allows type coercion)
console.log(0 === "0"); //false (strict equality does not allow type coercion)

console.log("" == "0"); //false (both are strings, but they are not equal) ,transivity broken , when both sides are strings, JavaScript compares them directly as text without any conversion.
console.log("" === "0"); //false (both are strings, but they are not equal)

console.log(0 == false) //true (loose equality allows type coercion)

console.log(null == 0) //false (loose equality allows type coercion)
console.log(0 == undefined) //false (loose equality allows type coercion)
console.log(null == undefined) //true (loose equality allows type coercion)
console.log(null === undefined) //false (strict equality does not allow type coercion)

console.log(false == undefined) //false (loose equality allows type coercion)
console.log(false == null) //false (loose equality allows type coercion)