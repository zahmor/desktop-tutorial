//Tzach Mordechai. 
//ex2
//Input: 2 numbers from user 
//Output: Print “makes 10” if the sum of the number is 10. Otherwise prints “nope”

(function(){
    'use-strict'    

let readlineSync = require('readline-sync');
let Num1 = Number(readlineSync.question('Please enter first number: '));
let Num2 = Number(readlineSync.question('Please enter second number: '));

(Num1+Num2==10) ?  console.log('makes 10') : console.log('nope');

})();



