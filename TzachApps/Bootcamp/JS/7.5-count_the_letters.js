//Tzach Mordechai.  

const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
  "hamburgers"];


function countLetters(array) {
  let str = array.join('').replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  let countLetters = {};
  for (let i = 1; i < str.length - 1; i++) {
    typeof (countLetters[str[i]]) === 'undefined' ? countLetters[str[i]] = 1 : countLetters[str[i]]++;
  }
  return countLetters;
}

console.log(countLetters(array));



