//Tzach Mordechai.  

//1
function print(word) {
  console.log(word);
}

function isString(word,callBackFunc) {
  if (typeof word === 'string') {
    callBackFunc(word);
  }
}
let test = isString('hello', print);

//2
function CreateDashes(str) {
 return str.split(' ').join('-');
}

function firstWordUpperCase(str,callBackFunc){
  let strArray = str.split(' ');
  let FirstWord = strArray.shift().toUpperCase();
  strArray.unshift(FirstWord);
  str = strArray.join(' ');
  return callBackFunc(str);
}

let test2 = firstWordUpperCase('hello world',CreateDashes);
console.log(test2);

//3 
function myFunc(str){
  return str +" it's me";
}

let test3 = firstWordUpperCase('hello world',myFunc);
console.log(test3);


//4

function myFunc2(str,callBackFunc){
  str = str + 'MyFunc2';
  return callBackFunc(str);
}

let test4 = myFunc2('hello test4',myFunc);
console.log(test4);
