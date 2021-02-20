//Tzach Mordechai.  
 

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
//sum isn't initilized. 

// 2. Which debug method did you use to find the bug?
//debegger. scope breakpoints

// 3. Explain the bug in your own words.
//sum isn't initilized so the sum stays as NaN
//sum is returned and not average. 
// 4. Fix the code and submit it all.


function calcAverage (arr){
var sum=0 ;
for ( var i = 0 ; i < arr.length; i ++ ){
sum += arr [ i ];
} return sum/arr .length ;
}
// debugger;
console.log(calcAverage ([ 85 , 90 , 92 ]));