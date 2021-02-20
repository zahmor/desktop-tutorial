//Tzach Mordechai. 


const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];


function searchSame(food,food1) {
  arraySame=[];
  for (const value of food){
    for (const value1 of food1){
      value===value1 ? arraySame.push(value1):0;
    }
  }
  return arraySame;
}

console.log(searchSame(food,food1));