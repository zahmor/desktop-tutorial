//Tzach Mordechai.  


let JohnsTeamAvg = ((89+120+103)/3).toFixed(2);
let MikesTeamAvg = ((116+94+123)/3).toFixed(2);

if (JohnsTeamAvg>MikesTeamAvg) {
  console.log("John's Team wins! The avarege score is " + JohnsTeamAvg);
}
else if(JohnsTeamAvg<MikesTeamAvg){
  console.log("Mike's Team wins! The avarege score is " + MikesTeamAvg);
}
else   //draw
  console.log("Draw! The avarege score is " + MikesTeamAvg);

   