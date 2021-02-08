//Tzach Mordechai.  



function todayDate() {
  var today = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var DayOfWeek = weekday[today.getDay()];  
  var dayInMonth = String(today.getDate()).padStart(2, '0');
  var Month = monthNames[today.getMonth()];
  var Year = today.getFullYear();
  strResult = 'Today is ' + DayOfWeek + ' the ' + dayInMonth + ' of ' + Month + ', ' + Year;
  return strResult;
}

var todayDateStr = todayDate();


console.log(todayDateStr);

