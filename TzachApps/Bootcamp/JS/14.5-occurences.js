//Tzach Mordechai.  



// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
//counter + 1 ;

// 2. Which debug method did you use to find the bug?
//debegger. scope. breakpoints. Watch

// 3. Explain the bug in your own words.
//counter don't change. 

// 4. Fix the code and submit it all.
//added  '='
//the function is correct but I still fix the design. 


function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  } 
  return counter;
}
// debugger;
console.log(countOccurrences("ini mini miny moe", "n"));