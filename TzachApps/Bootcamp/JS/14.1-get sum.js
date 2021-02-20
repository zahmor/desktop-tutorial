//Tzach Mordechai.  

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
//no comma while calling to the func

// 2. Which debug method did you use to find the bug?
//debugger
// 3. Explain the bug in your own words.
//2nd bug: assingment to const sum. 
// 4. Fix the code and submit it all.

function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
    // debugger;
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  console.log(sum);
}
//  debugger;

getSum([1, 2, 3], [5, 66, 23]);