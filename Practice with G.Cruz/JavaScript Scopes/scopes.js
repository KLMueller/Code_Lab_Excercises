// scope
// = accesibility of variables

// Global scopes = variables visible throughout entire program
let x = 0;


// Local scopes/inner scope/block scope 
// = has access to its own varaibles as well as its outer scope variables.
// = does NOT have access to its inner scope
// examples include functions, conditional statements, classes, loops, etc

function logToConsole(){
    let y = 1;
    console.log(x,y);

// function makeAnotherFunction(){
//     // this is inner scope
// }
}

logToConsole();

// console.log(y);   y is not defined