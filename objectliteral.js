// Object literal // //
 // Old
 function getBook(title,author){
   return {
             title:title,
              author:author
          };
 }
 
  var book = getBook("life","bhagya");
  console.log(book);
  
  //ES6 // //
  function getBook(title,author){
    return {
              title,
               author
           };
  }
  
   var book = getBook("life","bhagya");
   console.log(book);