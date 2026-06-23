//Private  keyword - (#)- hidden Data
//Public- open data

class Credentials {
    #apiKey; //Private variables are not allowed outside the class
    user; //public

    constructor(user, key) {

        this.user = user;
        this.#apiKey = key;
    }
    //custom made function by us 
    rahulgetAuthHeader() {

        return "Bearer " + this.#apiKey;
    }



}
let cred = new Credentials("admin", "secret_key_12345")
console.log(cred.user)
console.log(cred.apiKey);
//console.log(cred.#apikey) - error

const token = cred.rahulgetAuthHeader();
console.log(token);

