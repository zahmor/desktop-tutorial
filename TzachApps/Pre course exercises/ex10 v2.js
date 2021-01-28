//Tzach Mordechai. 
//Ex10-Star Instead Of Space
//Input: String
//Output: The user's string ,replacing every space with a ‘*’.

let readlineSync = require('readline-sync');
let InputString = readlineSync.question('Please enter a string: ') ; 

console.log(InputString.split(' ').join('*')) ;  //Fix 28.12.2020

 
