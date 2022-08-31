// Return a boolean if a number is divisible by 10

let optionOne = 3;
let optionTwo = 30;

function isDivisibleByTen(){ 
    let result = null; 
 if ((optionOne % 10) === 0) {
    result = true;
 } 
 else {
    result = false;
}
return result;
}

console.log(isDivisibleByTen()) 

