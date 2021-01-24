//Tzach Mordechai.  
//Ex15- Join two arrays
//Input function:  two arrays
//Output function:  array that is the joining of those two arrays.

function JoinTwoArrays(Array1,Array2) {  // Array1.concat(Array2);
   let JoinedArray = [];
   for (let i = 0 ,Array1Length = Array1.length, JoinedArrayLength = Array1.length +Array2.length  ; i < JoinedArrayLength ; i++) { //running from 0 to len1+len2-1
      JoinedArray.push((i<Array1Length) ? Array1[i] : Array2[i-Array1Length]) ; //push array1 till reaching Array1 Length and then push array2 elements
   }
   return JoinedArray;
}

let Array1 = ['Hello','Danny','have', 'you'];
let Array2 = ['been','around', 'the', 'World','?'];
let JoinedArray = new Array();   //no need in this line
JoinedArray =  JoinTwoArrays(Array1,Array2);
console.log(JoinedArray);
