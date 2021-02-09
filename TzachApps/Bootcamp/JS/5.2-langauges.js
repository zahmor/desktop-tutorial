//Tzach Mordechai.  


function langauges(langauge) {
  switch (langauge) {
    case 'mandarin':
      return 'MOST number of native speakers!';
      break;
    case 'spanish':
      return '2nd place in number of native speakers';
      break;
    case 'english':
      return '3rd place';
      break;
    case 'hindi':
      return 'Number 4';
      break;
    case 'arabic':
      return '5th most spoken language';
      break;
    default:
      return 'Not in the top 5';
  }
}

console.log(`arabic is ${langauges('arabic')}`);
