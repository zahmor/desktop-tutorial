


//Tzach Mordechai
//ex1
//Input: user's name
//Output: "Hello <UserName>!"


let readlineSync = require('readline-sync');
let userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');



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











//Tzach Mordechai.
//ex3 
//Input: Number between 0-9. 
//Output: The number in words, i.e. the user typed 3 the output will be “THREE”.

let readlineSync = require('readline-sync');
let InputNum = Number(readlineSync.question('Please enter a number between 0-9: '));
let myArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

(InputNum>=0 && InputNum<=9 && Number.isInteger(InputNum) ) ?  console.log(myArray[InputNum]) : console.log('Illegal input');






//Tzach Mordechai. 
//ex4
//Recommend on a good restaurant
//Input: Number of people coming, Whether it should be Kosher or not, Whether it should be Mehadrine or not. 
//Output: A relevant restaurants

function CheckIsNumber(IsParamNumber) {
  if(isNaN(IsParamNumber)){
      throw "stop execution";
  }
}
function CheckIsYesOrNo(IsYesOrNo) {
  if(IsYesOrNo!=='y' && IsYesOrNo!=='n'){
      throw "stop execution";
  }
}

try{
  let readlineSync = require('readline-sync');
  let NumOfPeople = readlineSync.question('Number of people you are going with: ');
  CheckIsNumber(NumOfPeople);
  let IsKosher = readlineSync.question('Should it be Kosher? (y/n) ');
  CheckIsYesOrNo(IsKosher);
  let IsKashrutLemehadrin='';
  if (IsKosher=='y'){
      IsKashrutLemehadrin = readlineSync.question('Should it be Kashrut Lemehadrin? (y/n) ');
      CheckIsYesOrNo(IsKashrutLemehadrin);
  }
  FoodType = ['Vegan', 'Fast Food', 'Chinese', 'Steakhouse', 'Italian'];
  let  FoodTypeIndex = readlineSync.keyInSelect(FoodType, 'What kind of food do you want? ');
  let  MapResturantsKosher = { 'Vegan':'Mezze', 'Fast Food':'Derbi\'s', 'Chinese':'Asia', 'Steakhouse':'Steak Wood', 'Italian':'Cielo' }
  let  MapResturantsKashrutLemehadrin = { 'Vegan':'Umm Kulthum', 'Fast Food':'Henri\'s', 'Chinese':'Hai-Phong', 'Steakhouse':'Arale', 'Italian':'Karma' }
  let  MapResturantsNonKosher = { 'Vegan':'Yuli\'s Lunch Box', 'Fast Food':'Domino\'s Pizza', 'Chinese':'Tin Tin', 'Steakhouse':'Tzidkiyaho', 'Italian':'Terasa' }
  let  ChosenFoodType = FoodType[FoodTypeIndex]; //Whether its Vegan, Fast food etc. 
  let  ChosenRestaurant = (IsKashrutLemehadrin=='y') ? MapResturantsKashrutLemehadrin[ChosenFoodType] :
                           (IsKosher=='y') ? MapResturantsKosher[ChosenFoodType] : MapResturantsNonKosher[ChosenFoodType];
  console.log('\n\nOk, ' + ChosenRestaurant + ' is a good choice. Bon Appetit!\n\n');  
}

catch (e) {
  console.error(e);
}





//Tzach Mordechai
//assignment1
//Creating a quiz (my version, not the angels and demons one ;)
//5 questions with 4 possible answers per question
//Input: User's answers
//Output: The score and a comment, depend on how good the user was answering the questions. 

let readlineSync = require('readline-sync');
let OpeningText = `

  /|  /|       ****************************    (/_/)
 / @ @ /       *     appleseeds.org       *   (='.'=)
( > º < )      *    assignment1- Quiz     *   (")_(")
 '>>x<<´       *       Tzach Mor          *
 /  O  /       ****************************
`;

console.log(OpeningText);

let UserScore = 0;
//to present which Q are we, 'first Q', 'Second Q', etc. 
let IndNumbering=['\n\nFirst','\n\nSecond','\n\nThird','\n\nFourth','\n\nFifth','\n\nSixth', '\n\nSeventh', '\n\nEighth', '\n\nNinth', '\n\nTenth'];  
let Questiontitle =  ` Question:
----------------  `
let QuestionsArray = ['Which planet is closest to our sun? '
                    ,'If it\'s 5 p.m. in Los Angeles, what time is it in London?'
                    ,'If you were alive during the Impressionist Movement, which year would you most likely be living in?'
                    ,'Which of these fractions is greatest?'
                    ,'Lima, Georgetown, and Buenos Aires are all capital cities on which continent?'
                    ,'What is the largest planet in our solar system?' //6 Geek mode.
                    ,'What is the fastest land animal?'
                    ,'How many legs does a lobster have?'
                    ,'What was the first animal to go into orbit?' 
                    ,'What is the first element on the periodic table?'
                ]
let AnswersOptionsArray = [
                            ['Earth', 'Venus', 'Mars', 'Mercury'],
                            ['6 a.m.', '1 a.m.', '9 a.m.', '12 a.m.'],
                            ['1869', '1953', '1713', '1425'],
                            ['1/2', '7/8', '4/10', '8/11'],
                            ['Africa', 'North America', 'Asia', 'South America'],
                            ['Earth', 'Venus', 'Jupiter', 'Mercury'],
                            ['Cheetah','Lion','Jaguar','Turtle'],
                            ['10','8','6','4'],
                            ['A rabbit','A cat','A rhino' ,'A dog'],
                            ['Plutonium','Hydrogen','Helium','Aluminum']
                          ]
let AnswersArray =['Mercury','1 a.m.','1869', '7/8', 'South America','Jupiter','Cheetah','10', 'A dog', 'Hydrogen'] ;

for (let i=0; i<10 ; i+=1){
    console.log(IndNumbering[i] + Questiontitle);
    UserScore+= (AnswersArray[i]==AnswersOptionsArray[i][readlineSync.keyInSelect(AnswersOptionsArray[i], QuestionsArray[i])]) ? 5 :0 ;         
}

let QuizResultInd = (UserScore===50) ? 0 : (UserScore>=40) ? 1 : 2;  
let QuizResultMessage = ['You\'re a genius! ', 'Good Job! You answered correctly on most questions','You can do better than that, try another quiz!']

console.log('\n\n ----------Quiz results---------- \nYour score is ' + UserScore +  '\n' + QuizResultMessage[QuizResultInd] + '\n\n');




//Tzach Mordechai. 
//ex5 
//Input: no input.  
//Output: all the odd numbers from 1 to 100.

for (let i=0; i<100 ; i+=1){
  (i%2===1)?console.log(i +', '):1;
}





//Tzach Mordechai. 
//ex6 
//Input: reapeted requests to insert an integer till the nnumber is greater than 10.  
//Output: if number larger than 10 -> Thank you. if not- asking to insert a number larger than 10. 

let readlineSync = require('readline-sync');
let InputNumber = readlineSync.question('Please choose a number larger than 10: '); 
while (InputNumber<=10){
    InputNumber = readlineSync.question('Please choose a number LARGER than 10: '); //now 'LARGER' with capital letters. That's why I didn't use Do-while
}
console.log('Thank you');





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





//Tzach Mordechai. 
//Ex8 - BOOM
//Input: No input
//Output: Prints all of the numbers between 0 and 100: 
        //For every number that is divisible by 7 or has the digit 7 print ‘boom’.
        //In every other case – print the number itself. Example: 1,2,3,4,5,6, BOOM,8,9,10,11,12,13,BOOM,15,16,BOOM,18

        let BoomArray=[];
        for (let i=1; i<=100 ; i+=1){
            (i%7===0 || i.toString().includes('7') ) ? BoomArray.push('BOOM') : BoomArray.push(i) ;  
        }  
        console.log(BoomArray.join(',') );

        


 //Tzach Mordechai. 
//Ex9-Prime Numbers
//Input: Positive number
//Output: All the prime numbers between 1 and the number unserted.
//Using the sieve of Eratosthenes for finding all prime numbers up to any given limit.

let readlineSync = require('readline-sync');
let InputNumber = parseInt(readlineSync.question('Please enter a positive number: ')) ; 
InputNumber+=1; // to have an array till the number the user inserted. 
let PrimeArray = new Array(InputNumber);                     

//Starting with 2 and assiging values to all numbers that devid with 2: 4,6,8,10... then index=3 and assinging values to cells 6,9,12...
//All cells with a numbers assigned are not prime
for ( let Index=2 ;Index<InputNumber;Index+=1){     
    for (let i=2*Index;i<InputNumber;i+=Index){      //
        PrimeArray[i] = false; //If the number is a multiple of the smaller number, then the number is not a prime number. 
    }
}

for (i=2; i<InputNumber ; i+=1){  //Print the prime numbers. 
( PrimeArray[i] !== false) ? console.log(i) : 1;  //if no value in the cell, it's a prime number
}



//Tzach Mordechai. 
//Ex10-Star Instead Of Space
//Input: String
//Output: The user's string ,replacing every space with a ‘*’.

let readlineSync = require('readline-sync');
let InputString = readlineSync.question('Please enter a string: ') ; 

console.log(InputString.replace(' ','*')) ; 




//Tzach Mordechai. 
//Ex11-Palindrome
//Input: String  
//Output: Determine whether the string input is a palindrome or not. “123454321” is a palindrome, and so is “eye”

let readlineSync = require('readline-sync');
let InputString = readlineSync.question('Please enter a string: ') ; 
let ReversedString = InputString.split('').reverse().join('');
console.log((InputString===ReversedString) ? 'It\'s a palindrome!' : 'It\'s NOT a palindrome! :( ' ); 



//Tzach Mordechai. 
//Ex12– Capitalize Vowels
//Input: String  
//Output: Same string with capitalized vowels chars (a, e, i, o, u,y)

let  VowelsCapitalMap = { 'a':'A', 'e':'E', 'i':'I', 'o':'O', 'u':'U','y':'Y' };

//Creating function to array that replace small letters vowels into capital characters. Using the map above. 
Array.prototype.VowelsCapital = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = (VowelsCapitalMap[this[i]]===undefined) ? this[i] : VowelsCapitalMap[this[i].toString()];  //In case the letter doesn't appear in the map keys, use existing letter in array
    }
};


let readlineSync = require('readline-sync');
let InputString = readlineSync.question('\nPlease enter a string: ') ; 

let ArrayVowels = InputString.split('');    
ArrayVowels.VowelsCapital();
let CapitalizedVowels = ArrayVowels.join(''); //Create a 

console.log('\n' + CapitalizedVowels + '\n'); 



//Tzach Mordechai. 
//Ex12– Capitalize Vowels SECOND VERSION!!
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
let CapitalizedVowels = ArrayVowels.join(''); //Create a 

console.log('\n' + CapitalizedVowels + '\n'); 






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






 //Tzach Mordechai. 
//Ex14- min max
//Input: Integer: N. 
//Output: Max and min values in the array created. Array length: N. Each cell has random value between 1-50

try {
  let readlineSync = require('readline-sync');
  let InputInteger = readlineSync.question('Please enter an ineger: ') ; 
  if(isNaN(InputInteger) || isNaN(parseFloat(InputInteger))){   // input validation that's it's an integer. 
      throw "stop execution";
  }  
      
  let MaxValueInArray=0;
  let MinValueInArray =0;
  let RandomValuesArray = [];

  for (i = 0 ; i <InputInteger ; i++) {
      RandomValuesArray.push(Math.ceil(Math.random()*50)); //fill array with values between 1 to 50
  }

  MaxValueInArray = Math.max(...RandomValuesArray); //find and assign the max value in the array
  MinValueInArray = Math.min(...RandomValuesArray);

  console.log('\nMin is ' + MinValueInArray + '\nMax is ' + + MaxValueInArray); 
}

catch (e) {
  console.error(e);
}







//Tzach Mordechai. 
//Assignment2 – Game Of War
//Input:  User name, the bet in each round and decision whether to go for another round. 
//Output: The card for each, winning or losing message. Current balance. If user lost all money, 'Broke" message. Else: User earnings.
 
let readlineSync = require('readline-sync');
let OpeningText = `

8b      db      d8 ,adPPYYba, 8b,dPPYba,  
 8b    d88b    d8          Y8 88P     Y8     
  8b  d8  8b  d8   ,adPPPPP88 88          
   8bd8    8bd8    88,    ,88 88          
    YP      YP       8bbdP Y8 88    

                                _____
    _____                _____ |6    |
   |2    | _____        |5    || & & | 
   |  &  ||3    | _____ | & & || & & | _____
   |     || & & ||4    ||  &  || & & ||7    |
   |  &  ||     || & & || & & ||____9|| & & | _____
   |____Z||  &  ||     ||____S|       |& & &||8    | _____
          |____E|| & & |              | & & ||& & &||9    |
                 |____h|              |____L|| & & ||& & &|
                                             |& & &||& & &|
                                             |____8||& & &|
                                                    |____6|
`;

function PickCard() {
  return Math.ceil(Math.random()*12); 
}

console.log(OpeningText);

try { 
  let PlayerName = readlineSync.question('\nEnter your user name: ') ; 
  console.log('\nHello ' + PlayerName + ', you currently have 50 dollars');
  let CurrentBalance = parseInt(50);
  let UserAnswer;

  do {
      let BetAmount = readlineSync.question('\nPlace your bet for the next round: 1 to 50: ') ; 
      if(isNaN(BetAmount) || isNaN(parseFloat(BetAmount))){   // input validation that's it's an integer. 
          throw "stop execution";
      }
      if(BetAmount>CurrentBalance || BetAmount<0 ){   // In case the user is a liar. :) inserting negetive or big number. 
        console.log('\nI said between 1 to ' +  CurrentBalance + ' and you typed ' + BetAmount + '!!' );  
        throw "I don't play with liars!!! Bye\n";
      }   

      UserCard = PickCard();  //Card for user
      ComputerCard = PickCard();
      console.log('\nYour card is ' + UserCard + ' And my card is ' + ComputerCard );  

      if(UserCard-ComputerCard >0) {  //User won!
        CurrentBalance +=parseInt(BetAmount);  //Update balance
        console.log('\nYou won ' + BetAmount + '!! And now you have ' + CurrentBalance );  //Announce to user
      } 
      else if(UserCard-ComputerCard < 0)  { //Computer won :/
        CurrentBalance -= parseInt(BetAmount); //Update balance
        console.log('\nYou lost ' + BetAmount + ' And now you have ' + CurrentBalance );   //Announce to user
      }
      else{  //draw: UserCard=ComputerCard    //Geek mode. 
        console.log('\nIt\'s a draw, play another round!');   //Announce to user it's a draw
      }

     if(CurrentBalance === 0) {break;}  

     LikeAnotherRoundOptions = ['Play another round', 'Leave with my money :-)'];
     let  LikeAnotherRoundQ = readlineSync.keyInSelect(LikeAnotherRoundOptions, 'What would you like to do? ');

     UserAnswer = LikeAnotherRoundOptions[LikeAnotherRoundQ];

  }  while (UserAnswer==='Play another round'  ); 
  

  (CurrentBalance === 0) ? console.log('\nYou are broke... Bye Bye\n') : (CurrentBalance > 50) ? 
                                                                        console.log('\nYou leave with ' + CurrentBalance + ', good job\n') :
                                                                        console.log('\nYou leave with ' + CurrentBalance + ', at least you\'re not broke \n') ;
}

catch (e) {
  console.error(e);
}
















//Tzach Mordechai. 
//Ex15- Join two arrays
//Input function:  two arrays
//Output function:  array that is the joining of those two arrays.

function JoinTwoArrays(Array1,Array2) {  // Array1.concat(Array2);
  let JoinedArray = [];
  for (let i = 0 ,Array1Length = Array1.length, JoinedArrayLength = Array1.length +Array2.length  ; i < JoinedArrayLength ; i++) { //running from 0 to len1+len2-1
     JoinedArray.push((i<Array1Length) ? Array1[i] : Array2[i-Array1Length]) ; //push array1 till reaching Array1 Length and then push array2 elements
  }
  return JoinedArray;
}

let Array1 = ['Hello','Danny','have', 'you'];
let Array2 = ['been','around', 'the', 'World','?'];
let JoinedArray = new Array();
JoinedArray =  JoinTwoArrays(Array1,Array2);
console.log(JoinedArray);











//Tzach Mordechai. 
//Ex16– Reverse list
//Input: array of integers
//Output: Reversed array.     i.e. [1,2,3] would return [3,2,1]

function ReverseArray(ArrayRef) {  // Array1.concat(Array2);
  for (let i = 0 , ArrayLengthSwap = parseInt(ArrayRef.length/2), ArrayLength = ArrayRef.length-1 ; i < ArrayLengthSwap ; i++) {  
      let SwapedValue =  ArrayRef[ArrayLength-i]; //replacing from one side of the array to the other. 1<->n, 2<->n-1, 3<->n-2 etc. 
      ArrayRef[ArrayLength-i] = ArrayRef[i]
      ArrayRef[i]=SwapedValue; 
  }
}

let Array1 = [1,2,3,4,5,6,7,8,9,10,11];
ReverseArray(Array1);
console.log(Array1);





//Tzach Mordechai
//assignment3- Hang man
//Input: char or word guessed
//Output: the hidden word covered with asterisks as long the user haven't guessed the characters. the user can make 10 mistaken guesses till game ends. 

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
    NumOfMistakenGuesses-=1;
    (InputString.length > 1 || InputString.toString().match("^[a-zA-Z]+$")) ? console.log('Your guess is invalid'):1;   //In case input is invalid
  }
  else{  //NumOfMistakenGuesses=1 // it was actually the last guess 
    console.log('You used your 10 chances and you didn\'t guess the word this time. Try another game!');
    break
  }
  
}  while (AsteriskwordArray.join('').includes('*') ||     NumOfMistakenGuesses === '1'); 


console.log('End');



        
       //////////////////////////////////////////////////////////////////////////////////////


if(10 ==10)
      console.log('makes 10');
    else
        console.log('nope');

let teststring ='test string'
console.log(teststring.length)


//if (IsKashrutLemehadrin=='y'){
      //  ChosenRestaurant = mapResturantsKashrutLemehadrin[FoodType[FoodTypeIndex]]
       // }
    //else if (IsKosher=='y'){
      //  ChosenRestaurant = mapResturantsKosher[FoodType[FoodTypeIndex]]
        //}
    //else {  // NonKosher
     //   ChosenRestaurant = mapResturantsNonKosher[FoodType[FoodTypeIndex]]
       // }

    //let ChooseResturant = Math.floor(Math.random()*5);

    let  ChosenFoodType = Answers1[Q1];
    console.log(ChosenFoodType);


    for (let val of QuestionsArray){
      let Q5 = readlineSync.keyInSelect(AnswersOptionsArray, val); // South America
  
  
  }//////////////////////////////////////////// Assignment1


      //console.log(AnswersOptionsArray[i][readlineSync.keyInSelect(AnswersOptionsArray[i], QuestionsArray[i])]);
    //console.log(AnswersArray[i]);
    //console.log(UserScore);

  console.log(IndNumbering[Ind++] + Questiontitle);
Answers1 = ['Earth', 'Venus', 'Mars', 'Mercury'];  
let Q1 = readlineSync.keyInSelect(Answers1, 'Which planet is closest to our sun? '); //Mercury
UserScore+= (Answers1[Q1]==='Mercury') ? 5:0;

console.log(IndNumbering[Ind++] + Questiontitle);
Answers2 = ['6 a.m.', '1 a.m.', '9 a.m.', '12 a.m.'];  
let Q2 = readlineSync.keyInSelect(Answers2, 'If it\'s 5 p.m. in Los Angeles, what time is it in London?'); //1 a.m
UserScore+= (Answers2[Q2]==='1 a.m.') ? 5:0;

console.log(IndNumbering[Ind++] + Questiontitle);
Answers3 = ['1869', '1953', '1713', '1425'];  
let Q3 = readlineSync.keyInSelect(Answers3, 'If you were alive during the Impressionist Movement, which year would you most likely be living in?'); // 1869
UserScore+= (Answers3[Q3]=== '1869') ? 5:0;

console.log(IndNumbering[Ind++] + Questiontitle);
Answers4 = ['1/2', '7/8', '4/10', '8/11'];  
let Q4 = readlineSync.keyInSelect(Answers4, 'Which of these fractions is greatest?'); // 7/8
UserScore+= (Answers4[Q4]=== '7/8') ? 5:0;

console.log(IndNumbering[Ind++] + Questiontitle);
Answers5 = ['Africa', 'North America', 'Asia', 'South America'];  
let Q5 = readlineSync.keyInSelect(Answers5, 'Lima, Georgetown, and Buenos Aires are all capital cities on which continent?'); // South America
UserScore+= (Answers5[Q5]=== 'South America') ? 5:0;

  }//////////////////////////////////////////// Assignment1



  //IsMakesTen(Num1+Num2);

  function IsMakesTen(Sum) {
    (Sum ==10) ?  console.log('makes 10') : console.log('nope');
}




//return this[0];


//console.log(ArrayVowels[0]);

//Array.prototype.Vowels = function () { 
  //  for (let i=0 ; i<4; ++i) {   //, len=this.length
        //console.log( (VowelsCapitalMap[Array[i].toString()]===undefined) ? Array[i] : VowelsCapitalMap[Array[i].toString()]);
    //    console.log('aaa');
    //}    
    

    

//  let  ChosenRestaurant = (IsKashrutLemehadrin=='y') ? MapResturantsKashrutLemehadrin[ChosenFoodType] :
  //                         (IsKosher=='y') ? MapResturantsKosher[ChosenFoodType] : MapResturantsNonKosher[ChosenFoodType];

  //console.log(ArrayVowels); 


//let CardSuits = []
StringBuilder CardSuits = new StringBuilder();

CardSuits.append((char)'\u2660'); //SPADE
CardSuits.append((char)'\u2666');  //DIAMOND
CardSuits.append((char)'\u2663'); //CLUB
CardSuits.append((char)'\u2764');  //HEART

console.log(CardSuits);

