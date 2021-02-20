//Tzach Mordechai.  



//  Block 1
//  5
// result calls firstResult as a function. meaning it goes to otherFunction with returns the local b varible. 
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9); //5
var result = firstResult(2);  //5

//1
// We print the a on the scope. all varibles on b2 function are gone, Kaput. 
//Block 2.
var a = 1;
function b2() {
  a = 10;
  return;
  function a() { }
}
b2();
console.log(a);


//3
// The loop starts, function is defined only, but only start to run after 100ms, by then the loop already finished and i =3 
//Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}