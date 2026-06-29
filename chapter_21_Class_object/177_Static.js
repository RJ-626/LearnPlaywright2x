class student {
    static batch_name = "playwright";
    static mentor_name = "Pramod"

    constructor(name, age, phoneNo) {

        this.name = name;
        this.age = age;  //different for different objects
        this.phoneNo = phoneNo
    }

}

let s1 = new student("Rahul", "31", "9876543210")
let s2 = new student("Ram", "33", "987652210")
let s3 = new student("Mohan", "31", "9876545210")
let s4 = new student("Raj", "42", "88845643210")

console.log(s1.name);
console.log(s3.phoneNo);
console.log(s2.age);
console.log(student.batch_name); //Static - same for all the objects 



