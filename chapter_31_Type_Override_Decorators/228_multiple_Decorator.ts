function first(method: any) {
    return function () {
        console.log('first');
        return method();
    };
}

function second(method: any) {
    return function () {
        console.log('second');
        return method();
    };
}

class dog {
    @first
    @second
    bark() {
        return 'woof';
    }
}

let r = new dog().bark();
console.log(r); // Output: woof