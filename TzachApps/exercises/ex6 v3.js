
//Tzach Mordechai. 
//ex6 
//Input: reapeted requests to insert an integer till the number is greater than 10.  
//Output: if number larger than 10 -> Thank you. if not- asking to insert a number larger than 10. 

let readlineSync = require('readline-sync');
let InputNumber = readlineSync.question('Please choose a number larger than 10: ');
  //check other inputs than numbers
while (InputNumber<=10 || isNaN(InputNumber)){  //Added check that input is actually an integer. 28.12.2020
    InputNumber = readlineSync.question('Please choose a number LARGER than 10: '); //now 'LARGER' with capital letters. That's why I didn't use Do-while
}
console.log('Thank you');