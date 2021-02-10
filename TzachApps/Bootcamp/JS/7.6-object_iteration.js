//Tzach Mordechai.  

let myObj = {
  1: 'a',
  2: 'b',
  3: 'c',
};


function objectIteration(myObj) {
  let swappedObj = {};
  for (var propt in myObj) {
    swappedObj[myObj[propt]]=propt; ;
  }
  return swappedObj;
}

console.log(objectIteration(myObj));








// let ageme = 22; 

// let person = {
//   age:ageme,
//   name:'wes',
//   'cool-dude': true,
//   sayHello: function (greeting = 'Hay')
//   {
//     return `{greeting} ${this.name}`;
//   },
// };

// let person2 = {...person}; //new copy  . sallow copy. not copy the inner objects. 
// let person3 = person;  //referance

// //unpkg site lodash bring url to the code. 
// //let person4 = _.clonedeep(person1)

// let objectUnit = {
//   ...object1,
//   ...object2,
// };


// function doStuff(data){
//   data= 'something else'
// }
// doStuff(name1);

// function doStuff(data){
//   data.tomatos= 'something else'
// }
// doStuff(name1); //modify as a referance objects!!! 


// person.job = 'Full stack dev';  //new attribute

// const personFrozen = Object.freeze(person);

// console.log( person.name);
// let objectToCheck = 'name';
// console.log( person['name']);
// console.log( person[objectToCheck]);
// //not working: console.log( person.name);
// person.name ? person.name.last: 'mor';


// for (i = 1; i < 51; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }



// for (i = 1; i < 51; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }
