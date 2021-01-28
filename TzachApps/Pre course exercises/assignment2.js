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
  let CurrentBalance = 50; // parseInt(50); no need in parseint. 
  let UserAnswer;

  do {
      let BetAmount = readlineSync.question('\nPlace your bet for the next round: 1 to '+ CurrentBalance + ': ') ;  //fix: change from 50 to CurrentBalance
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
     let  LikeAnotherRoundQ = readlineSync.keyInSelect(LikeAnotherRoundOptions, 'What would you like to do? ',{cancel:false})  //removed cancel option. as it's the same as leaving the game. 28.12.2020

     UserAnswer = LikeAnotherRoundOptions[LikeAnotherRoundQ];

  }  while (UserAnswer==='Play another round'  ); 
  

  (CurrentBalance === 0) ? console.log('\nYou are broke... Bye Bye\n') : (CurrentBalance > 50) ? 
                                                                        console.log('\nYou leave with ' + CurrentBalance + ', good job\n') :
                                                                        console.log('\nYou leave with ' + CurrentBalance + ', at least you\'re not broke \n') ;
}

catch (e) {
  console.error(e);
}