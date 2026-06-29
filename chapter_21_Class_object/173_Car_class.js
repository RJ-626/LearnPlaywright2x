class Car {

    //CAB

    //constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;

    }
    //attributes

    //behaviour
    drive() {
        console.log("I am driving ", this.name);

    }


}

const tesla = new Car("Model s4");
tesla.drive();

const i10 = new Car("grand i10")
i10.drive();
