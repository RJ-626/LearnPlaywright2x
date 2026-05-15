
/* 1.What is the difference between var, let, and const?

var is function scoped, it can be redeclared and reassigned.

let is block scoped, can be reassigned but cannot be redeclared in the same scope.

const is also block-scoped, but it cannot be reassigned and cannot be redeclared. It must be initialized at the time of declaration.

 

2. What is the Hoisting in JavaScript?

Hoisting is JavaScript's default behaviour of moving variable and function declaration to the top of their containing scope during the compilation phase, BEFORE the code is actually executed.

 3.Can we change the value of a const variable? Explain with an example.

No, we cannot change the value of a const variable.

 

Eg: const url = "https://www.flipkart.com"

url = https://www.amazon.com -- TypeError: Assignment to constant variable.

 The reassignment for the const is not allowed it gives TypeError.

const a = 100;

a = 50;  -- TypeError: Assignment to constant variable.

 

4. What is the difference between function scope and block scope? How does it relate to var vs let/const?

Function scope: A variable declared inside a function can only be used inside that function.

Variables created using: var are function scoped.

 

Block scope: A variable declared inside a block { } can only be accessed inside that block.

Variables created using: let and const are block-scoped.



5.What will be the output of the following code, and why?

javascript

   for (var i = 0; i < 3; i++) {

     setTimeout(() => console.log(i), 100);

   }

 

   for (let j = 0; j < 3; j++) {

     setTimeout(() => console.log(j), 100);

   }

Result: The output of the first loop is

3

3

3

The loop executes very fast:

i = 0

i = 1

i = 2

The loop ends, after the loop ends i=3.

i<3 condition fails.

setTimeout() schedules the callback to run later.

setTimeout(() => console.log(i), 100);

means:





wait 100ms



then print i

But by the time callback runs:

loop already finished

and i became:

3



Output of First Loop

3
3
3



Why?

Because:





var is function-scoped



only ONE shared variable i exists



all callbacks use same i



Visualization

Loop completes first
i becomes 3

Then callbacks execute:
console.log(i)
console.log(i)
console.log(i)

All print:

3



Second Loop — Using let

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}



What Changes?

let is block-scoped.

For every iteration:





a NEW separate j variable is created.

So internally it behaves like:

Iteration 1 → j = 0
Iteration 2 → j = 1
Iteration 3 → j = 2

Each callback remembers its own value.



Output of Second Loop

0
1
2



Final Combined Output

3
3
3
0
1
2



Core Concept

var

var i

Only one variable shared across all iterations.



let

let j

New variable created for every iteration. 
*/