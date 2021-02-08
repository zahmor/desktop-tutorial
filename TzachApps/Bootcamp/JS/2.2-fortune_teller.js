//Tzach Mordechai.  



function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  strResult = 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' + partnerName + ' with ' + numberOfChildren +' children.';
  return  strResult;
}

var Elon = tellFortune('Billionaire','California', 'Grimes' ,7);
 

console.log(Elon);

  