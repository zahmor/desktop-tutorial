//Tzach Mordechai.  

// isIsland: true or false.
// population’s integer.
// country  string 
// Language string.

function countryToLiveIn(language, isIsland, population , country) {
  let populationInt = parseInt(population);
  if (language === 'English' && populationInt< 50 && isIsland === false ) {
    return "You should live in Finland";    
  }  
  else {
    return "Finland does not meet your criteria";
  }
}

console.log(countryToLiveIn('English',false, 7, 'Finland' ));
