class Person {
    #child1
    #child2

    constructor(name, child1, child2) {
        this.name = name;
        this.#child1 = child1;
        this.#child2 = child2;
    }

    getchild1() {
        return this.#child1;
    }

    setchild1(changed_name) {
        return this.#child1 = changed_name;
    }
}

const p = new Person("Rahul", "Vivan", "Quiara");
console.log(p.name);
console.log(p.child1);
console.log(p.child2);
console.log(p.getchild1());
console.log(p.setchild1());

