class Car {
    #engineName;
    constructor(name, engineName) {
        this.name = name;
        this.#engineName = engineName;
    }

    getEngine() {
        return this.#engineName;
    }

    setEngine(name_changed) {
        return this.#engineName = name_changed;
    }
}

const c = new Car("Tesla", "XX067");
console.log(c.name);
console.log(c.engineName);
console.log(c.getEngine());
c.setEngine("ZXERT5")
console.log(c.getEngine());



