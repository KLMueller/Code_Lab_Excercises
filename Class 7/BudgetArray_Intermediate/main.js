// Aim: Create the function that takes an array with objects and returns the sum of people's budgets.


const getBudgets = [
   { name: "Thorne", age:6,  budget: 10},
   { name: "Briar",  age:7,  budget: 12},
   { name: "Caleb",  age:44, budget: 30}
];

let sum = 0;

for (let index = 0; index < getBudgets.length; index++) {
  sum += getBudgets[index].budget;
}
  
console.log(sum); 