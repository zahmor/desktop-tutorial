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