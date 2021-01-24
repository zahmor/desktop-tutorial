//Tzach Mordechai. 
//Ex12– Capitalize Vowels (2)
//Input: String  
//Output: Same string with capitalized vowels chars (a, e, i, o, u,y)

let  VowelsCharstoCapital = 'aeiouy';

//Creating function to array that replace vowels letters into capital characters.  
Array.prototype.VowelsCapital = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = (VowelsCharstoCapital.includes(this[i])) ? this[i].toUpperCase() : this[i]; //If it's vowels char - > Upper it. 
    }
}


let readlineSync = require('readline-sync');
let InputString = readlineSync.question('\nPlease enter a string: ') ; 

let ArrayVowels = InputString.split('');    
ArrayVowels.VowelsCapital();
let CapitalizedVowels = ArrayVowels.join(''); 

console.log('\n' + CapitalizedVowels + '\n'); 
