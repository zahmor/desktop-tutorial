//Tzach Mordechai.  

/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
const welcomeExplicit= function() {
  let welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
}

const powerImplicit = a => Math.pow(myNumber, 2);

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }

// From function expressions to IIFE functions.
var squareRoot = (function (a) {
  var squareRoot = Math.sqrt(a);
  return squareRoot;
})();

var randomNumbers = (function (a, b) {
  var randomNumbers = Math.random() * (a - b) + b;
  return randomNumbers;
})();


const squareRoot = a => Math.sqrt(a);

const randomNumbers = (a, b) => Math.random() * (a - b) + b;