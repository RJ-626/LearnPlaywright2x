class BankAccount {

    #balance = 0; //Private field - hidden from outside 

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance; //controlled access
    }
}

const account = new BankAccount;
account.deposit(600);
console.log(account.getBalance());
console.log(account.balance);
//console.log(account.#balance);