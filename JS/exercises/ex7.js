//Tzach Mordechai. 
//ex7, Factorial Challenge
//Input: Positive number
//Output: Factorial of the input number. 

 
let readlineSync = require('readline-sync');
let InputNumber = readlineSync.question('Please enter a positive number: '); 
(InputNumber>=0 && Number.isInteger(InputNumber) ) ?  1 : console.log('Illegal input');  //input check.  
let Factorial=1;

for (let i=2; i<=InputNumber ; i+=1){
    Factorial*=i ;
  }
console.log(InputNumber + '! = ' + Factorial );
 