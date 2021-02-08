//Tzach Mordechai.  


function isLeapYear(year) {
  let i = parseInt(year);
  if (i % 4 === 0 && i % 400 === 0) {
    return "It is indeed a leap year!";
  }
  else if (i % 4 === 0 && i % 100 === 0) {
    return "This is not a leap year.";
  }
  else if (i % 4 === 0) {
    return "It is indeed a leap year!";
  }
  else {
    return "This is not a leap year.";
  }
}

console.log(isLeapYear(2100));
