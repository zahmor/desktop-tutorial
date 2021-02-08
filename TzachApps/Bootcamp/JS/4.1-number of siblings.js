//Tzach Mordechai.  


let numSiblings = prompt("How many siblings do you have?");

if (parseInt(numSiblings) === 1) {
  // if (numSiblings === 1) {
  console.log('1 sibling!');
}
else if (parseInt(numSiblings) > 1) {
  console.log('More than 1 sibling');
}
else {
  console.log('No siblings');
}

//  6. the input type is string while we compare it to Number. 
//  7. working. 
//  8. to make sure we compre int to int