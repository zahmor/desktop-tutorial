//Tzach Mordechai.  


//let score = prompt("Please enter a score");
function scoreGrade(score) {
  let scoreInt = parseInt(score);

  if (scoreInt >= 0 && scoreInt < 65) {
    return 'F';
  }
  else if (scoreInt >= 65 && scoreInt < 70) {
    return 'D';
  }
  else if (scoreInt >= 70 && scoreInt < 79) {
    return 'C';
  }
  else if (scoreInt >= 80 && scoreInt < 90) {
    return 'B';
  }
  else if (scoreInt >= 90 && scoreInt < 100) {
    return 'A';
  }
  else {
    return 'Not valid input';
  }
}
