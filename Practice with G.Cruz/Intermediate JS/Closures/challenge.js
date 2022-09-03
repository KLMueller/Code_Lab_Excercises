// Write function sum that works like this: sum(a)(b) = a + b
// sum(1)(2) = 3 
// sum(5)(-1) = 4

// MY ATTEMPT AT THE ANSWER (realized when watching the solution that I did not write a function)

// who
x = 1;
y = 2;

// what
var sum = (x + y)

// when
console.log(sum)


// GERMAN'S SOLUTION TO THE ANSWER
function sum(a){
    return function(b){
        console.log(a+b)
    }
}
sum(1)(2);
sum(5)(-1);

