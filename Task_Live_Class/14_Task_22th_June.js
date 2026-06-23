
//You need to create a class with the name of Calculator where you will have different methods available for some subtraction, modulus, division, and multiplication. What will happen is you will basically create an object with the two variables. You will basically give the output of some subtraction, modulus, division, and multiplication. 


class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    addition() {
        return this.num1 + this.num2;
    }

    subtraction() {
        return this.num1 - this.num2;
    }
    multiplication() {
        return this.num1 * this.num2;
    }

    modulus() {
        return this.num1 % this.num2;
    }

    division() {
        return this.num1 / this.num2;
    }

}

let numbers = new Calculator(40, 6);
console.log(numbers.addition());
console.log(numbers.subtraction());
console.log(numbers.multiplication());
console.log(numbers.modulus());
console.log(numbers.division());

//You need to create a class with the static and non-static methods as well as variables. It will be a simple class of our Playwright 2x batch. You will be also printing out the students. Create 10 objects of students and print them. Also create a print method.
class Students {

    static course = "Playwright 2x batch";

    constructor(name) {
        this.name = name;
    }

    Print() {
        console.log(`Name of the student is : ${this.name}`);
    }
    static print2() {
        console.log(`***${this.course}***`);
    }
}

Students.print2();

let s1 = new Students("Rahul")
let s2 = new Students("Virat")
let s3 = new Students("Sam")
let s4 = new Students("Veer")
let s5 = new Students("Pramod")
let s6 = new Students("Charlie")
let s7 = new Students("George")
let s8 = new Students("Julia")
let s9 = new Students("Alice")
let s10 = new Students("Bob")

s1.Print();
s2.Print();
s3.Print();
s4.Print();
s5.Print();
s6.Print();
s7.Print();
s8.Print();
s9.Print();
s10.Print();