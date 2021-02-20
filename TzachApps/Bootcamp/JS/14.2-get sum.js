//Tzach Mordechai.


// 1. First find the line that contains the problem. Write it down.
//findSmalest function call. 

// 2. Which debug method did you use to find the bug?
//debugger and source tab on the chrome

// 3. Explain the bug in your own words.
//there is a typo once calling to the function. 

// 4. Fix the code and submit it all.
//Added 'l'


function findSmallest(a, b, c){
  if (a > b > c){
  return c;
  } else if (a > c > b) {
  return a;
  } else {
  return b;
  }
  }
  // debugger;
  console.log(findSmallest(52,66, 2));