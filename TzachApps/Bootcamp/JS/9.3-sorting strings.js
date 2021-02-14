//Tzach Mordechai.  


const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//a
console.log(foods.sort());
console.log(foods.sort().reverse());



const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple",];
//console.log(foodsWithUpperCase.sort());



// b - sorting with uppercase

let  upperAsc = foodsWithUpperCase.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  console.log( upperAsc);

let  upperDesc = foodsWithUpperCase.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
console.log(upperDesc );

//Longest word
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(words.sort((a, b) => b.length - a.length));