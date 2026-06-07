const user = {

    name: "John",
    age: 35,
    city: "London"
}

//Basic deconstruction
const { name, age } = user;
console.log(name, age);

//Rename variable 

const { name: username, age: userage } = user;
console.log(username);
console.log(userage);

//default value
const { country = "USA" } = user; // if country exist in the object , give me that value and if not then USA
console.log(country);
console.log(user); //USA will not be added only provide the default value.


const data = {
    user1:
    {
        name: "john",
        address:
        {
            city: "Delhi"
        }


    }

};

const { user1: { address: { city } } } = data;
console.log(data.user1.address.city);

