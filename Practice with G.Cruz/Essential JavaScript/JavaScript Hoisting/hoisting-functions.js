let paycheck = 300

logNumberToConsole (10);
    // the above returns 10 because of hoisting

addRandomNumber(paycheck);

function addRandomNumber(num){
    let randomNumber = Math.random() * 100;
    logNumberToConsole(randomNumber + num);
}    

function logNumberToConsole(num){
console.log(num);
}

// Always declare variables first
