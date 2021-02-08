//Tzach Mordechai. 


function boom(n) {
  let i = parseInt(n);
  if (i % 7 === 0 && i.toString().includes('7')) {
    return 'BOOM-BOOM';
  }
  else if (i % 7 === 0) {
    return 'BOOM';
  }
  else {
    return i;
  }
}

console.log(boom(7));