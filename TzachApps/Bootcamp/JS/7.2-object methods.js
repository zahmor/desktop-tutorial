//Tzach Mordechai.  

let mycountry = {
  countryName: 'Finland',
  capital: 'Helsinki',
  language: 'Finnish',
  population: 6,
  neighbours: 3,
  describe: function() {
    return `Finland has ${this.population} million people, their mother tongue is ${this.language}, they
    have ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`
  },
  checkIsland: function(){
    mycountry["isIsland"] =  this.neighbours===0 ? true:false;
  },
};

mycountry.checkIsland();
console.log(mycountry.isIsland);