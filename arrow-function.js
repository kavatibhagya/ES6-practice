// Old

function myData(){
  console.log("my name is bhagya");
}
myData();


var myFullname = function(lastname){
  console.log("my name is bhagyalakshmi" +lastname);
  return lastname;
}
var fullName = myFullname('kavati');
console.log('fullName output ===>', fullName);



// ES6
  

const myDetails =  (babyname) => {
console.log("I have a baby and her name is " +babyname);
return babyname;
}
var newName = myDetails('Ridhi Dandigam');


