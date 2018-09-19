// call
let parker = { name: 'Parker' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(parker, 'Guy Fieri', 'Jon Taffer');



// apply

let sam = { name: "Sam Darnold" }

function greet(name1, name2){
  console.log(`Hi ${name1} and ${name2}, I'm ${this.name} and I'm here to take your legacy`);
}

greet.apply(sam, ["Chad Pennington", "Mark Sanchez"])
