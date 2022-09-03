// *CLOSURE* = when a function remembers its outer variables.

let x = 0;

function logToConsole(){
    console.log(x)
}

x = 10;

logToConsole()