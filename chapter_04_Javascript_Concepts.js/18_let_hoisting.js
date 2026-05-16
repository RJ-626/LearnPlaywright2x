console.log(score);//reference error because of temporal dead zone
let score = 100;
//temporal dead zone is the time between the beginning of the scope and the point where the variable is declared. During this time, the variable is in a "dead" state and cannot be accessed. This is why we get a reference error when we try to access the variable before it is declared.

//if we use var instead of let, we will get undefined instead of reference error because var is hoisted and initialized with undefined. However, it is still not recommended to use var because it can lead to unexpected behavior and bugs in the code.

//-----TDZ for"score"starts here---
//console.log(score); //reference error because of temporal dead zone
//score=50;
//typeof score; //reference error because of temporal dead zone
let score = 100;
//-----TDZ for"score"ends here---
console.log(score); //100(safe to access the variable after it is declared)
