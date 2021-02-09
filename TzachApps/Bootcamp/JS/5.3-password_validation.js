//Tzach Mordechai.  


function passwordValidation(userPassword) {
  if (userPassword.length>7)   {
    return "strong";
  }
  else {
    return "weak";
  }
}

function passwordValidationTernary(userPassword) {
  return userPassword.length>7 ?  "strong" :  "weak";
}


function passwordValidationAdvanced(userPassword) {   
    return (userPassword.length>7 && userPassword.toLowerCase() !== userPassword ) ? "very strong" : (userPassword.length===7) ? "strong" : (userPassword.length<7) ? "weak" :'no comment' ;   
}
// /[A-Z]/.test(word)
// /^[A-Z]/.test(word)  ^ for the first letter

console.log(`Your password is ${passwordValidationTernary('a1234')}`);

console.log(`Your password is ${passwordValidationAdvanced('a123se@E4')}`);

