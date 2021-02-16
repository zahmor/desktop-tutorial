//Tzach Mordechai.  

const data = [
  {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
  meats: ["hamburgers", "sausages"],
  fish: ["salmon", "pike"],
  },
  },
  {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["ham", "chicken"],
  fish: ["pike"],
  },
  },
  {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["hamburgers", "lamb"],
  fish: ["anchovies", "tuna"],
  },
  },
  ];

//   1. Create a function that returns all the names from the array.
function returnNames(data){
  myData=[];
  data.forEach(element => {myData.push(element.name)});
  return myData;
}
console.log(returnNames(data));

// 2. Create a function that returns all the objects that are born before 1990.
function bornBefore(data){
  myData=[];
  data.forEach(element => { Date.parse(element.birthday) >= Date.parse("01-01-1990") ? myData.push(element) : false});
  return myData;
}
console.log(bornBefore(data));

// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.

function differentFoodsFunc(data){
  differentFoods={};
  data.forEach(element => {
    let foodType = Object.values(element.favoriteFoods);
    foodType.forEach(foodNames => {
                    foodNames.forEach(food => {differentFoods[food]= differentFoods[food]+1 || 1})})
    }
       
    );
  return differentFoods;
}

console.log(differentFoodsFunc(data));