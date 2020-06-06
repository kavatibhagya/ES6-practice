
// Old

// var user = {
//   name:"bhagya",
//   lastname:"kavati",
//   age:24,
//  fullname:function(){
//    console.log("My full Name is "+this.name +" "+this.lastname);

//    var sayName = function(){
//         console.log("My age is " +this.lastname);
//    }
//    sayName();
//   }
// };
// user.fullname();

// ES6
var user = {
  name:"bhagya",
  lastname:"kavati",
  age:24,
 fullname:function(){
   console.log(`My full name is ${this.name} and ${this.lastname}`);

   var sayName = () => {
        console.log(`My age is ${this.lastname}`);
   }
   sayName();
  }
};
user.fullname();