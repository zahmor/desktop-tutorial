//Tzach Mordechai.  
 

// 1. max
let items = [62, 3, 7, 9, 33, 6, 322, 67, 853];
let arr = items.reduce((maxValue, item) => Math.max(maxValue,item));
console.log(arr);

// 2. sum of even numbers
let sumEven = items.reduce((accumulator, item) => item%2===0 ? accumulator + item:accumulator ,0);
console.log(sumEven);

// 3. average
let average = items.reduce((accumulator, item) => accumulator + item ,0) / items.length;
console.log(average);