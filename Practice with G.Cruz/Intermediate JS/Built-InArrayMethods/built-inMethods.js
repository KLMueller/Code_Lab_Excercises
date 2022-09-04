//built-in methods = methods that are given to us
// let people = ["John", "James", "Jimmy", "Jane"];
// console.log(`There are ${people.length} people. Their names are ${people}.`);

let people = {
    0: "John",
    1: "James",
    2: "Jimmy",
    3: "Jane",
    length: 4,
    map: function(callback){
    let newArr = [];
    for(let i=0; i < this.length; i++){
       //'this' is represting the object 'people'  
    //    console.log(callback(this[i]))
    newArr.push(callback(this[i]));
    }
    return newArr;
 }
}
// console.log(people[0]);
//prints John

// console.log(`There are ${people.length} people.`);
//prints There are 4 people.

// people.map()
//prints 0 1 2 3 when console log was set to i and map function was empty, no callback.

// people.map((person)=>{
//         return `My name is ${person}.`
// })       
//prints My name is John. My name is James. My name is Jimmy. My name is Jane.

let introductions = people.map((person)=>{
    return `My name is ${person}.`
    } )       
console.log(introductions)
//returns PS C:\Users\13143\Desktop\CodeLabs> node .\built-inMethods.js
// [
//     'My name is John.',
//     'My name is James.',
//     'My name is Jimmy.',
//     'My name is Jane.'
//   ]


