//Tzach Mordechai.  
// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
//return line

// 2. Which debug method did you use to find the bug?
//debugger and the watch. 

// 3. Explain the bug in your own words.
//arr[10] is undefined

// 4. Fix the code and submit it all.
//arr[0] instead the arr[10]

// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30



function getSumOfEven(arr){
  // debugger;
return arr[2] + arr[4] + arr[6] + arr[8] + arr[0];
}
// debugger;
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));