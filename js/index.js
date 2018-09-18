// use this to copy code snippets or us your browser's console
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
    name: 'Bob',
    greet: greet
};

person.greet(); // my name is Bob, hi!

//call
Using call, we pass the object for this as the first argument, followed by any function arguments in order.
let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!


//apply
The call to apply works similarly to call, except that apply only takes two arguments: the value of this, and then an Array of arguments to pass to the function, like so:
greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally!

//bind
let sally = { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally); // newGreet is context-bound to sally

newGreet('Bob');
// Hi Bob, my name is Sally!

greet('Bob');
// Hi Bob, my name is !
by calling greet.bind(sally), we return a new function that we then assign to the variable newGreet. Invoking newGreet shows that the this object is bound to sally.
Note that the original greet function is unchanged. bind does not change it. Instead, bind copies the function, and sets the copied function's this context to whatever is passed through as an argument.

// bind
class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    matchInterests(event) {
        return event.keywords.some(
            function(word) {
                return this.interests.includes(word);
            }.bind(this) // added to the and of the callback function, Using bind here lets us keep this referring to the User context.
        );
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);
