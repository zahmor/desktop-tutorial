//Tzach Mordechai. 
//Ex16– Reverse list 
//Input: array of integers
//Output: Reversed array.     i.e. [1,2,3] would return [3,2,1]

function ReverseArray(ArrayRef) {  // Array1.concat(Array2);
    for (let i = 0 , ArrayLengthSwap = parseInt(ArrayRef.length/2), ArrayLength = ArrayRef.length-1 ; i < ArrayLengthSwap ; i++) {  
        let SwapedValue =  ArrayRef[ArrayLength-i]; //replacing from one side of the array to the other. 1<->n, 2<->n-1, 3<->n-2 etc. 
        ArrayRef[ArrayLength-i] = ArrayRef[i]
        ArrayRef[i]=SwapedValue; 
    }
  }
  
  let Array1 = [1,2,3,4,5,6,7,8,9,10,11];
  ReverseArray(Array1);
  console.log(Array1);
  
  