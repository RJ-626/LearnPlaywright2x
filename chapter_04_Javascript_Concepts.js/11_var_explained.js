var a = 10; //Global scope
//var is a function scope

console.log("Value of a is:", a);

function greet() {

    console.log("Hello ,The Testing academy");
    var a = 20; //local scope (higher preference than global)
    console.log("Value of a is:", a);

}

if (true) {
    var a = 30;
    console.log(a);
}

greet();
greet();