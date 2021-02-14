//Tzach Mordechai. 

let person1 = {

};

let myMap = new Map();

// for (let [key, value] of myMap) {
//   console.log(key + " = " + value);
// }

//1.
const maxCount = 1000000;
console.time("My operation")// <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
  //Perform the operation to be measured multiple times
  person1[i] = i;
} console.timeEnd("My operation") // <---- Stops the time



console.time("My operation")// <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
  //Perform the operation to be measured multiple times
  myMap.set('person' + i, i);
} console.timeEnd("My operation") // <---- Stops the time



//2.
for (const [key, value] of Object.entries(person1)) {
  value===999999 ? console.log(key) : 1;
}


myMap.get('person999999');

console.log('end');

//3. object
//4. map