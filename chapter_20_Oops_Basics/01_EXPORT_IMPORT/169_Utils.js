import { Base_URL as bul_util, formatUpperCaseString } from "../utils.js";
import { Base_URL as bul_testtul, formatTestName } from "../testutils.js";

console.log(bul_util);
let res = formatUpperCaseString("Dashboard page")
console.log(res);

console.log(bul_testtul);
let result = formatTestName("login page")
console.log(result);