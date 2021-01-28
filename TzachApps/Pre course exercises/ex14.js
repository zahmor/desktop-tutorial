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