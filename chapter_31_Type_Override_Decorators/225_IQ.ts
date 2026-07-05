

class Father {
    home(): void {
        console.log("Father's home");
    }
}

class Rahul extends Father {
    // Rahul inherits the home method from Father
    override home(): void {
        console.log("Rahul's home");
    }
}

let rahul = new Rahul();
rahul.home(); // Output: Rahul's home