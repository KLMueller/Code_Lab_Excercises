// console.log("test")

// callback function = is a function that is passed in as an argument in another function.

function executeThreeTimes(callback){
    for(let i = 0; i < 3; i++){
        callback();
    }
}

function printFullName(){
    console.log("John Doe")
}

executeThreeTimes(printFullName);
//prints "John Doe John Doe John Doe"