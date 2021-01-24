//Tzach Mordechai. 
//Ex11-Palindrome
//Input: String  
//Output: Determine whether the string input is a palindrome or not. “123454321” is a palindrome, and so is “eye”

let readlineSync = require('readline-sync');
let InputString = readlineSync.question('Please enter a string: ') ; 
let ReversedString = InputString.split('').reverse().join('');
console.log((InputString===ReversedString) ? 'It\'s a palindrome!' : 'It\'s NOT a palindrome! :( ' ); 
