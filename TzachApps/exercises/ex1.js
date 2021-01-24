//Tzach Mordechai
//ex1
//Input: user's name
//Output: "Hello <UserName>!"


let readlineSync = require('readline-sync');
let userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');