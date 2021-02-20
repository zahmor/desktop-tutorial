//Tzach Mordechai.  

let n = 3; 

function stepShape(n) {
  for (let i = 1; i <= n ; i++){
        console.log(`${"#".repeat(i)} ${" ".repeat(n-i)} `);
  }
  
}

stepShape(5)