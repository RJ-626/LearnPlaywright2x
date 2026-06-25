class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;

    }

    getBalance() {
        return this.#balance;

    }

    setBalance(balance, iscashier) {

        if (iscashier) {
            this.#balance = balance;
        } else {
            console.log("You are not allowed");

        }
    }

}

const bank = new ICICI("Rahul", 100);
console.log(bank.getBalance());
bank.setBalance(1000000, false);
console.log(bank.getBalance());

let rahul_father = new ICICI("Rahull", 6000)
console.log(rahul_father.getBalance());
rahul_father.setBalance(3000000, true);
console.log(rahul_father.getBalance());

