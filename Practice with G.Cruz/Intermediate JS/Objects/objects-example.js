// let firstName = "John";
// let age = 35;
// let favoriteIceCream = 'strawberry'; 

let person = {
    firstName:"John",
    age: 35,
    favoriteIceCream: 'strawberry',
    vehicle:{
        make: 'Hyundai'
    }
}

console.log(`My name is ${person.firstName}.`);
console.log(`I am ${person["age"]} years old.`);
console.log(`My favorite ice cream flavor is ${person["favoriteIceCream"]}.`)
console.log(`I own a ${person.vehicle["make"]}.`);
console.log(`I own a ${person.vehicle.make}.`);
