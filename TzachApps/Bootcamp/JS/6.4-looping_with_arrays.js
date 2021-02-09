//Tzach Mordechai.  

function percentageOfWorld1(population){
  var percentage = (population/7900*100).toFixed(2) + '% of the world population';
  return percentage;
}

function populationPercentages(populations) {
  let percentages = [];
  for (i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld1(populations[i]));    
  }
return percentages; 
}

let populations = [9,10,60,80];
let percentages = populationPercentages(populations);

for (i = 0; i < percentages.length; i++) {
  console.log(` ${percentages[i]} `);
}