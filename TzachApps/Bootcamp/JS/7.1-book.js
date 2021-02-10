//Tzach Mordechai.  

let book = {
  bookName: '30 Days to Understanding the Bible',
  bookAuthor: 'Max E. Anders',
  bookLanguage: 'English',
  bookPrice: 8.2,
  publishingYear: 2019,
};

function bookFunc(book){
  return `The book ${book.bookName} was written by ${book.bookAuthor} in the year ${book.publishingYear}`;
}


console.log(bookFunc(book));