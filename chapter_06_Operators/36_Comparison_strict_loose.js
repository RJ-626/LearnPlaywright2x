
//number==string
console.log(5 == "5"); //true (loose equality allows type coercion)
console.log(5 === "5"); //false (strict equality does not allow type coercion)

console.log(42 == 45) //false
console.log(42 === 45) //false


console.log(5 === 5) //true
console.log(5 === "5") //false

console.log(5 == 5) //true
console.log(5 == "5") //true

console.log(0 == "") //true (empty string is coerced to 0)
console.log(0 === "") //false (different types, no coercion)

console.log(false == 0) //true (false is coerced to 0)
console.log(false === 0) //false (different types, no coercion)
console.log(true == 1) //true (true is coerced to 1)
console.log(true === 1) //false (different types, no coercion)

console.log(true == "1") //true (true is coerced to 1, and "1" is coerced to 1)
console.log(true === "1") //false (different types, no coercion)

console.log(true == 2) //false (true is coerced to 1, and 2 is not equal to 1)
console.log(true === 2) //false (different types, no coercion)

console.log(null == undefined) //true (null and undefined are considered equal in loose equality)
console.log(null === undefined) //false (different types, no coercion)

console.log(5 != "5") //false (loose equality allows type coercion)
console.log(5 !== "5") //true (strict equality does not allow type coercion)
//console.log(5 !=== "5") //does not exist (strict inequality operator is !==, not !===)