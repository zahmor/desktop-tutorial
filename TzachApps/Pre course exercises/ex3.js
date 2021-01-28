//Tzach Mordechai.
//ex3 
//Input: Number between 0-9. 
//Output: The number in words, i.e. the user typed 3 the output will be “THREE”.

let readlineSync = require('readline-sync');
let InputNum = Number(readlineSync.question('Please enter a number between 0-9: '));
let myArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

(InputNum>=0 && InputNum<=9 && Number.isInteger(InputNum) ) ?  console.log(myArray[InputNum]) : console.log('Illegal input');

