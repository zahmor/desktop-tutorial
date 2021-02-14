//Tzach Mordechai. 

const person1 = {
  name:'wes',
};

const person2 = {
  name:'wes',
};

const person3 = {
  name:'wes',
};

let myMap = new Map();

myMap.set('person1','1');
myMap.set('person2','2');
myMap.set('person3','3');

for (let [key, value] of myMap) {
  console.log(key + " = " + value);
  }

// // myMap.set(100, 'this is a number');

// myMap.set(person1,"really cool");

// const score = 100;
// const prizes 