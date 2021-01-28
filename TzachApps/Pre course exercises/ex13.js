//Tzach Mordechai. 
//Ex13- Longest Word
//Input: String  
//Output: Longest word in user's input. (Numbers orsymbols are not words). The first if case there are two words in the same length. 


let readlineSync = require('readline-sync');
let InputString = readlineSync.question('Please enter a string: ') ; 
let ArrayWords = InputString.split(' ');  //word in a cell
let LongestWordLength = 0;
let LongestWord = '';
let PunctuationAtWordEnd = '?.,!';


for (i = 0, Len=ArrayWords.length ; i <Len ; i++) {
    if(PunctuationAtWordEnd.includes(ArrayWords[i].toString().slice(-1))) {
        ArrayWords[i] = ArrayWords[i].toString().substring(0,ArrayWords[i].length-1) ;  //remove Punctuation at the end of the word if exist. 

    }
    if(ArrayWords[i].length > LongestWordLength && ArrayWords[i].toString().match("^[a-zA-Z]+$")){ //if the word is Longest till now and it contains only chars, declare it as the new Longest word
        LongestWordLength = ArrayWords[i].length;
        LongestWord = ArrayWords[i];
    }
}

if(LongestWordLength===0){
    console.log('\nNo valid word found, please try again.' + '\n'); 
}
else {
    console.log('\nLongest word in user\'s input is: ' + LongestWord + '\n'); 
}

