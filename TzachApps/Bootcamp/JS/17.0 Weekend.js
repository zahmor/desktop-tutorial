//Tzach Mordechai.  



//1.1
let isValueTrue = value => value === true ? 'Yes' : 'No';
console.log(`1.1 isValueTrue: ${isValueTrue(true)}`);

//2.1 
let myArray = [19, 5, 42, 2, 77, 54];
console.log(`2.1 Sum of lowest numbers: ${myArray.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0)}`);


//2.2
binaryArray = [1, 0, 0, 1];
// debugger;
console.log(`2.2 binary to a number: ${binaryArray.reduce((accumulator, currentValue, index) => accumulator + (2 ** index) * currentValue, 0)}`);


//2.3
let findNextSquare = isPerfectSquare => { return Number.isInteger(isPerfectSquare ** 0.5) ? ((isPerfectSquare ** 0.5) + 1) ** 2 : -1 };
console.log(`2.3 find next square: ${findNextSquare(625)}`);

//2.4
let findUniq = arrayUniq => { return arrayUniq.sort((a, b) => a - b).reduce((acc, currentValue, index, array) => array[0] === array[1] ? array[array.length - 1] : array[0]) };
console.log(`2.4 findUniq: ${findUniq([1, 1, 1, 2, 1, 1])}`); //=== 0.55

//2.5
let summation = N => [...Array(N + 1).keys()].reduce((acc, current) => acc + current);
console.log(`2.5 summation: ${summation(8)}`); //-> 36

//2.6
let centuryFromYear = year => Math.sign(year) * parseInt((Math.abs(year) + 99) / 100);
console.log(`2.6 century from year: ${centuryFromYear(1530)}`);

//2.7
let basicOp = (op, num1, num2) => eval(`${num1} ${op} ${num2}`);
console.log(`2.7 basic math op: ${basicOp('+', 15, 18)}`);


//3.1
//aug (inhabitants coming or leaving each year)
let nb_year = (p0, percent, aug, p) => {
  let yearPassed = 0;
  let currentPopulation = p0;
  while (currentPopulation - p < 0) {
    currentPopulation = (((0.01 * percent) + 1)) * currentPopulation + aug;
    // console.log(`yearPassed: ${yearPassed}, currentPopulation: ${currentPopulation}`);
    yearPassed += 1;
  }
  return yearPassed;
};
console.log(`3.1 years to target population: ${nb_year(1500, 5, 100, 5000)}`); //-> 15


//3.2
let busHopnDrop = [[2, 0], [3, 1], [5, 4], [20, 5]];
let leftOnBus = busHopnDrop => busHopnDrop.flat().reduce((acc, current, index) => index % 2 === 0 ? acc + current : acc - current, 0);
console.log(`3.2 left on bus: ${leftOnBus(busHopnDrop)}`);


//4.1
let nFibonacci = n => Array(n).fill(0)
  .map((elem, index, currentArray) => index <= 1 ? currentArray[index] = index : currentArray[index] = currentArray[index - 1] + currentArray[index - 2])
  .filter((el, index, array) => index === array.length - 1);
console.log(`4.1 nFibonacci: ${nFibonacci(6)}`);

//4.2
let nTribonacci = (signature, n) => n <= 3 ? signature[n - 1] : [...signature, ...Array(n - 3).fill(0)]
  .map((elem, index, currentArray) => index < 3 ? currentArray[index] = currentArray[index] : currentArray[index] = currentArray[index - 1] + currentArray[index - 2] + currentArray[index - 3])
  .filter((el, index, array) => index === array.length - 1);
console.log(`4.2 nTribonacci: ${nTribonacci([0, 0, 1], 9)}`);



//5.1
let trimmingString = str => str.split('').slice(1, str.split('').length - 1).join('');
console.log(`5.1 trimming string: ${trimmingString('1Hello Israel1')}`);

//5.2
let repeat_str = (repeatTimes, str) => str.repeat(repeatTimes);
console.log(`5.2 repeat string: ${repeat_str(5, 'Snow')}`);

//5.3
let toCamelCase = str => str.split(/-|_/)
  .map((current, index, array) => current[0].toUpperCase() + current.substring(1, current.length)).join(' ');
console.log(`5.3 to Camel Case: ${toCamelCase('Snow_on_the_golan')}`);

//5.4
function toWeirdCase(str) {
  let stringArray = str.toLowerCase().split(' ');
  stringReturn = '';
  for (i = 0; i < stringArray.length; i++) {
    let wordArray = stringArray[i].split('').map((wordChar, ind) => (ind % 2 === 0) ? wordChar.toUpperCase() : wordChar);
    stringReturn = stringReturn.concat(wordArray.join('').concat(' '));
  }
  return stringReturn;
}

console.log(`5.4 to Weird Case: ${toWeirdCase('Snow on the golan hights tomorrow')}`);

//5.5
let initialsGen = str => str.split(' ').map((curr, ind) => curr.split('')).map((curr, ind) => curr[0]).join('.');
console.log(`5.5 signeture: ${initialsGen('David Ben')}`);

//5.6
let maskify = str => str.split('').map((curr, ind, arr) => ind >= arr.length - 4 ? curr : '#').join('');
console.log(`5.6 maskify: ${maskify("4556364607935616")}`);

//5.7
let shortestWords = str => str.split(' ').reduce((acc, curr) => acc < curr.length ? acc : curr.length, 100);
console.log(`5.7 shortest words: ${shortestWords('Snow on the golan hights tomorrow')}`);


//5.8
let longestWords = str => str.split(' ').reduce((acc, curr) => acc > curr.length ? acc : curr.length, 0);
console.log(`5.8 longest words: ${longestWords('Snow on the golan hights tomorrow')}`);


//6.1
let Mumbling = str => str.split('').map((curr, ind) => curr.repeat(ind + 1)).map((curr, ind) => curr[0].toUpperCase() + curr.slice(1)).join('-');
console.log(`6.1 Mumbling: ${Mumbling("abcd")}`);

//6.2
let Duplicates = str => str.split('').sort().filter((x, ind, arr) => x === arr[ind + 1]).filter((x, i, a) => a.indexOf(x) == i).length;
console.log(`6.2 Duplicates: ${Duplicates("aaaaabccc")}`);

//6.3
let longestDistinct = (str1, str2) => (str1 + str2).split('').sort().filter((x, i, a) => a.indexOf(x) === i).join('');
console.log(`6.3 longest Distinct: ${longestDistinct("abcdefghijklmnopqrstuvwxyz", "abbbcdefnkjjkghijklmnopqrstuvwxyz")}`);

//6.4
let isogram = str => str.toLowerCase().split('').sort().filter((x, ind, arr) => x === arr[ind + 1]).length === 0;
console.log(`6.4 isogram: ${isogram("Dermatoglyphics")}`);


//7

Array.prototype.myFilter = function (checkElement) {
  const returnArr = [];
  for (let i = 0; i < this.length; i++) {
    if (checkElement(this[i])) {
      returnArr.push(this[i]);
    }
  }
  return returnArr;
};
let arr = [1, 3, 5, 6, 9, 11, 26, 8, 35, 10, 7, 42, 88];
console.log('7.1: ' + arr.myFilter(x => x > 25));


Array.prototype.myForEach = function (eachElement) {
  const returnArr = [];
  for (let i = 0; i < this.length; i++) {
    returnArr.push(eachElement(this[i]));
  }
  arr = returnArr;
  return arr;
};
console.log('7.2: ' + arr.myForEach(x => x * 2));



Array.prototype.myMap = function (eachElement) {
  const returnArr = [];
  for (let i = 0; i < this.length; i++) {
    returnArr.push(eachElement(this[i]));
  }
  return returnArr;
};
console.log('7.4: ' + arr.myMap(x => x * 2));


//8
let findPerimeter = (num1,num2) => 2*num1 +2*num2;
console.log(`8 find perimeter: ${findPerimeter(2, 9)}`);


