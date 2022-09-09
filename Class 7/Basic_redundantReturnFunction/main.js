// Aim: Write a function redundantReturn that takes in a 
// string a parameter named str. 
// This function should return another function that returns a message using the str variable. 
// Print that message to the developer console.


function redundantReturn(str) {
    return function(name) {
      return `${name}! ${str}`;
    };
  }
  
  const basicMessage = redundantReturn("We figured it out!");

  console.log(basicMessage("Nolan"));
 
