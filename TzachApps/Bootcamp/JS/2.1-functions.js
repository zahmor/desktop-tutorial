//Tzach Mordechai.  


function describeCountry(country, population, capitalCity) {
  strResult = country + ' has ' + population + ' million people and its capital city is ' + capitalCity;
  return  strResult;
}

var countryIsrael = describeCountry('Israel',9.2, 'Jerusalem');
var countrySpain = describeCountry('Spain', 60, 'Madrid');
var countryUS = describeCountry('The US', 445, 'Washington D.C.');

console.log(countryIsrael);
console.log(countrySpain);
console.log(countryUS);
  