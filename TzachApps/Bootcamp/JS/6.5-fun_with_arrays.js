//Tzach Mordechai.  

 //1
 const array1 = [1, 2, 3, 4];
 console.log(array1.fill(100));
 
 //2
 let toHundrad = Array.from({length: 100}, (v, i) => 1);
// [0, 1, 2, 3, 4...]

console.log(toHundrad);

//3
const person = {
  firstName: 'John',
  lastName: 'Doe'
};
const propertyValues = Object.values(person);
console.log(propertyValues);

//4
const array = ["Johnny", "Billy", "Sandy"]
const newObject = Object.assign({}, array)
console.log(newObject);
// newObject = { "0": "Johnny", "1": "Billy", "2": "Sandy" }


//5

let fruits = [];
console.log(Array.isArray(fruits));

//6
// ES6 way
let sheeps = [1,1,1];
const cloneSheepsES6 = [...sheeps];
console.log(cloneSheepsES6);

//7
let sheepsByReferance = sheeps; //  
sheepsByReferance.push(5);
console.log(sheeps);
