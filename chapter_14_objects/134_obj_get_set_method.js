const user = {
    firstName: "Rahul",
    lastName: "Jaiswal",
    age: 32,
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

console.log(user.fullName);

//this- current value 

user.fullName = "Alka Chaudhary";
console.log(user.fullName);

//newer format:

/*class User{
    firstname,
    lastname,
    fullname(){

    }
}*/