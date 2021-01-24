//Tzach Mordechai.
//assignment3- Hang man
//Input: char or word guessed
//Output: the hidden word covered with asterisks as long the user haven't guessed the characters. the user can make 10 mistaken guesses till game ends. 

//V2 Fix: User will not lose an attempt in case guess is invalid 29.12.2020


var figlet = require("figlet");

console.log(
  figlet.textSync("Hangman", {
    font: "epic",  //"broadway",
    horizontalLayout: "default",
    verticalLayout: "20",
    width: 160,
    whitespaceBreak: true,
  })
);
 

let Words = ['astronaut', 'dinosaur', 'programmer', 'unicorn','grandpa' ];  //The words the users need to guess. Will choose 1 word each game. 
let WordChoosenIndex = parseInt(Math.floor(Math.random()*(Words.length))); //Choosing the word to guess randomly each game
let StringWordArray = Words[WordChoosenIndex].split(''); // the array with the word needed to be guessed
let AsteriskwordArray = new Array(Words[WordChoosenIndex].length+1); //the array with AsteriskwordArray as long as the user didn't guess the characters. 
AsteriskwordArray = AsteriskwordArray.join('*').split(''); //Filling the AsteriskwordArray with Asterisks 
let NumOfMistakenGuesses = 10; //number of possible guesses. 
let readlineSync = require('readline-sync');
let InputString = '';

console.log('Cheat: the word that was choosen is ' + Words[WordChoosenIndex]); //

do {
   
  console.log('\nYou have ' + NumOfMistakenGuesses + ' guesses');  //print to screen commands
  console.log('The word is: ' + AsteriskwordArray.join(''));
  InputString = readlineSync.question('\nWhat is your guess: ').toLowerCase() ; //as the guess isn't case sensetive

  if((Words[WordChoosenIndex].includes(InputString) && InputString.length===1) ){ //Good guess of a character by user
    for (let index = 0; index < AsteriskwordArray.length; index++) { //filling in the correct char in all places fit in the asterisk array. Can be 1 or more.
        (StringWordArray[index]===InputString) ? AsteriskwordArray[index] = StringWordArray[index] : 1;
    }
    (AsteriskwordArray.toString().includes('*')) ? 1 : console.log('\nWell done, you\'ve guessed all the characters of ' + Words[WordChoosenIndex] ); //in case all char's where guessed
  }
  else if(Words[WordChoosenIndex]===InputString){  //Geek mode. in case user guessed all word
    Asteriskword = InputString;
    console.log('Well Done, you\'ve guessed the whole word!!! ');
    break
  }
  else if(NumOfMistakenGuesses>1) { //In case the user's guess was wrong    
    if(InputString.toString().match("^[a-zA-Z]+$")){
      NumOfMistakenGuesses-=1;                         
    }
    else{
      console.log('Your guess is invalid');    //Fix: User will not lose an attempt in case guess is invalid 29.12.2020
    }
     
  }
  else{  //NumOfMistakenGuesses=1 // it was actually the last guess 
    console.log('You used your 10 chances and you didn\'t guess the word this time. Try another game!');
    break
  }
  
}  while (AsteriskwordArray.join('').includes('*') || NumOfMistakenGuesses === '1'); 


console.log('End');