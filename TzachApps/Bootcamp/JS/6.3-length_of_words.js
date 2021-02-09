//Tzach Mordechai.  

let arraySizes=[];

function arraySizesFunc(arr) {
  for (i = 0; i < arr.length; i++) {
    arraySizes.push(arr[i].length);
  }
return arraySizes;
}

arraySizesFunc(["boo", "doooo", "hoo","ro"])

for (i = 0; i < arraySizes.length; i++) {
  console.log(` ${arraySizes[i]} `);
}
