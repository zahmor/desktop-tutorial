//Tzach Mordechai.  


// Recreate the challenge from the exercise 6.4-
// looping_with_arrays ,but this time using a while loop.
function percentageOfWorld1(population){
  var percentage = (population/7900*100).toFixed(2) + '% of the world population';
  return percentage;
}

function populationPercentages(populations) {
  let percentages = [];
  i = 0;
  while ( i < populations.length) {
    percentages.push(percentageOfWorld1(populations[i]));  
    i++  
  }
return percentages; 
}

let populations = [9,10,60,80];
let percentages = populationPercentages(populations);

i = 0;
while (i < percentages.length) {
  console.log(` ${percentages[i]} `);
  i++;
}



// 2. Reflect on what solution you like better for this task: the
// for loop or the while loop?

//for is shorter here