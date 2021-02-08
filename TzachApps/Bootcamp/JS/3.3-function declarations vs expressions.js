//Tzach Mordechai.  

function percentageOfWorld1(population){
  var percentage = (population/7900*100).toFixed(2) + '% of the world population';
  return percentage;
}
var china = percentageOfWorld1(1441);
var israel = percentageOfWorld1(9);
var usa = percentageOfWorld1(445);
console.log(china);
console.log(israel);
console.log(usa);

const percentageOfWorld2 = population => (population/7900*100).toFixed(2) + '% of the world population' ;  
var chinaExpression = percentageOfWorld2(1441);
var israelExpression = percentageOfWorld2(9);
var usaExpression = percentageOfWorld2(445);
console.log(chinaExpression);
console.log(israelExpression);
console.log(usaExpression);
