class Counter {
    constructor() {
        this.count = 0;
    }

    increament() {
        this.count++;
        return this;

    }

    display() {
        console.log("Count:", this.count);
        return this;


    }
}

new Counter().increament().increament().increament().increament().display();