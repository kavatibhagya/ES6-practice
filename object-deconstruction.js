// Object Deconstruction  // //
 // Old 
 var user = {
   name :'bhagya',
   age : 24
 }
 var myData =  user.name;
  
 console.log(myData);
  
  // ES6 
  const data ={
    names:'bhagya,raju',
    ages : [24, 30]
  }
  const {names, ages} = data;
  console.log(names, ages);
  
   