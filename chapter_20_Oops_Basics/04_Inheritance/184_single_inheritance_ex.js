class Animal {

    constructor(name) {
        this.name = name;

    }

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }


}

class DOG extends Animal {
    constructor(name, breed) {
        super(name); //it is used for parent constructor;
        this.breed = breed;
    }

    bark() {
        console.log(this.name, "is barking");

    }
}

let dog = new DOG("Rex", "lebrador")
console.log(dog.name);
console.log(dog.breed);
dog.eat();
dog.sleep();
dog.bark();



