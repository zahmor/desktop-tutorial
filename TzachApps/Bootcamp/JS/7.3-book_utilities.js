//Tzach Mordechai.  

let book1 = {
  bookName: '30 Days to Understanding the Bible',
  bookAuthor: 'Max E. Anders',  
  publishingYear: 2019,
};

let book2= {
  bookName: 'The Anatomy of Loneliness',
  bookAuthor: 'Teal Swan',  
  publishingYear: 2018,
};

let bookUtils = {

};

bookUtils.getFirstPublished= function(book1,book2){
  return book1.publishingYear>book2.publishingYear ? book2 : book1;  
}

bookUtils.setNewEdition= function(book,editionYear){
  book.latestEdition = editionYear;
}

bookUtils.setLanguage= function(book, language){
  book.language= language;
}

bookUtils.setTranslation= function(book, language, translator ){
  book.translation= {
    language:language,
    translator:translator,
  };
}

bookUtils.setPublisher= function(book, name, location ){
  book.publisher= {
    name,
    location,
  };
}

bookUtils.isSamePublisher= function(book1, book2){
  return book1.publisher === book2.publisher && book1.location === book2.location ? true : false ;
}

console.log(bookUtils.getFirstPublished(book1,book2));
bookUtils.setNewEdition(book1,2021);
console.log(book1.latestEdition);
bookUtils.setLanguage(book1, 'Hebrew');
console.log(book1.language);
bookUtils.setTranslation(book1, 'Arabic', 'Mohamad Ali' );
console.log(book1.translation);
bookUtils.setPublisher(book1, 'PublisherName', 'Spain' );
console.log(book1.publisher);
console.log(bookUtils.isSamePublisher(book1, book2));




 