// Confusing Comparison Cases: == (Loose) vs === (Strict)

// 1. Empty String vs String "0"
console.log("" == "0");   // false (both strings, direct comparison)
console.log("" === "0");  // false (both strings, direct comparison)

// 2. Empty String vs Number 0
console.log(0 == "");     // true (empty string coerced to 0)
console.log(0 === "");    // false (different types)

// 3. String "0" vs Number 0
console.log(0 == "0");    // true (string "0" coerced to number 0)
console.log(0 === "0");   // false (different types)

// 4. null vs undefined
console.log(null == undefined);   // true (special case in loose equality)
console.log(null === undefined);  // false (different types)

// 5. null vs 0
console.log(null == 0);   // false (null only equals undefined in loose equality)
console.log(null === 0);  // false (different types)

// 6. undefined vs 0
console.log(undefined == 0);   // false (undefined coerces to NaN)
console.log(undefined === 0);  // false (different types)

// 7. false vs 0
console.log(false == 0);   // true (false coerced to 0)
console.log(false === 0);  // false (different types)

// 8. true vs 1
console.log(true == 1);    // true (true coerced to 1)
console.log(true === 1);   // false (different types)

// 9. true vs "1"
console.log(true == "1");   // true (both coerced to 1)
console.log(true === "1");  // false (different types)

// 10. true vs 2
console.log(true == 2);    // false (true coerced to 1, 1 != 2)
console.log(true === 2);   // false (different types)

// 11. NaN vs NaN
console.log(NaN == NaN);   // false (NaN is never equal to anything, even itself)
console.log(NaN === NaN);  // false (NaN is never equal to anything, even itself)

// 12. Empty Array vs false
console.log([] == false);   // true (array coerced to empty string, then to 0)
console.log([] === false);  // false (different types)

// 13. Empty Array vs Empty String
console.log([] == "");      // true (array coerced to empty string)
console.log([] === "");     // false (different types)

// 14. Empty Array vs Number 0
console.log([] == 0);       // true (array coerced to empty string, then to 0)
console.log([] === 0);      // false (different types)

// 15. Single-Item Array vs Number
console.log([1] == 1);      // true (array coerced to string "1", then to number 1)
console.log([1] === 1);     // false (different types)

// 16. Empty Object vs Empty Object
console.log({} == {});      // false (different object references)
console.log({} === {});     // false (different object references)

// 17. Empty Object vs Empty Array
console.log({} == []);      // false (object coerced to string "[object Object]", array to "")
console.log({} === []);     // false (different types)

// 18. Empty Object vs String
console.log({} == "[object Object]");   // true (object coerced to string)
console.log({} === "[object Object]");  // false (different types)

// 19. String "false" vs Boolean false
console.log("false" == false);   // true ("false" coerced to 0, false coerced to 0)
console.log("false" === false);  // false (different types)

// 20. null vs false
console.log(null == false);   // false (null only equals undefined)
console.log(null === false);  // false (different types)

// 21. undefined vs false
console.log(undefined == false);   // false (undefined coerces to NaN)
console.log(undefined === false);  // false (different types)

// 22. Number -0 vs +0
console.log(-0 == +0);    // true (both are considered equal)
console.log(-0 === +0);   // true (both are considered equal)

// 23. Infinity vs Infinity
console.log(Infinity == Infinity);    // true
console.log(Infinity === Infinity);   // true

// 24. Best Practice: Always use === to avoid unexpected coercion
let value = "5";
if (value === 5) {
    console.log("Strict: This will NOT run");
}
if (value == 5) {
    console.log("Loose: This WILL run (unexpected!)");
}
