//Tzach Mordechai.  

// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.

myArray = ['b',1,2,3,5];
console.log(myArray.map(value => {return value*2}));



// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
evenArray= [];
myArray.forEach(element => { element%2===0 ? evenArray.push(element) : 0 });
console.log(evenArray);


// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.

function showFirstAndLast(myArray) {  
    firstLastArray = [];
    myArray.forEach((element,index,myArray) =>
         {(index === myArray.length - 1 || index===0) && typeof element === 'string' ? firstLastArray.push(element) : 0 });
    return firstLastArray;
}

console.log(showFirstAndLast(myArray));

// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.
function vowelCount(myStr) {  
  objectVowel = {};
  myStr.toLowerCase().split('').forEach((element) =>
       {(/^[aeiou]$/i).test(element) ? objectVowel[element]>0 ? objectVowel[element]+=1 : objectVowel[element]=1 : 0 });
  return objectVowel;
}
myStr = 'Hello Friend, how are you doing?';
console.log(vowelCount(myStr));

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
function capitalize(myStr) {  
  myStrcapitalize = '';
  myStr.toUpperCase().split('').forEach((element) => { myStrcapitalize+=element});
  return myStrcapitalize;
}
console.log(capitalize(myStr));

// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.
function shiftLetters(myStr) {  
  myStrshiftLetters = '';
  myStr.split('').forEach((element) => { myStrshiftLetters+=String.fromCharCode(element.charCodeAt()-1)});
  return myStrshiftLetters;
}
console.log(shiftLetters(myStr));


// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
function swapCase(myStr) {  
  myStrswapCase = '';
  myStr.split(' ').forEach((element,index) => { index%2===1 ? myStrswapCase+= ' ' + capitalize(element): myStrswapCase+= ' ' + (element)});
  return myStrswapCase;
}
console.log(swapCase(myStr));