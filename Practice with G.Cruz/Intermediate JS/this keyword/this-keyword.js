// console.log(this)
//returns window object in console
//returns empty object in node

//****************************************** 
// let person = {
//     name: "John",
//     age: 45,
//     printName: function(){
//         console.log(this.name)
//     }
// }

// person.printName()
//prints {name: 'John', age: 45, printName: ƒ}
// age
// : 
// 45
// name
// : 
// "John"
// printName
// : 
// ƒ ()
// [[Prototype]]
// : 
// Object
//-------------------------------------------------------------
//if .name is added after 'this' on line 9, prints John
//*************************************************************
let student = {
    name: "Jane"
}
function printName(){
console.log(this.name)
}
printName.call(student);
//can change value of this here.
//returns Jane