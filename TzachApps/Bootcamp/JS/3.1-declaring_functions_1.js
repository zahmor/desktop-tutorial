//Tzach Mordechai.  

/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
const welcome = () => 'Welcome to Appleseeds Bootcamp!';  

const power = a =>  Math.pow(myNumber, 2);  

const add = (a, b = 5) => (a+b);
   


// From function expressions to function declarations
// const hello = () => "Hello!";
// const squareRoot = a => Math.sqrt(a);
// const randomNumbers = (a, b) => Math.random() * (a - b) + b;


function hello() {
  let hello = "Hello!";
  return hello;
}

function squareRoot(a) {
  let result = Math.sqrt(a);
  return result;
}

function randomNumbers(a,b) {
  let result = Math.random() * (a - b) + b;
  return result;
}