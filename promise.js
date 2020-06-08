const prom = new Promise((resolve,reject) =>{
  setTimeout(() =>{
      // resolve({user:"bhagya"});
      reject( new Error ("something went wrong"));
  }, 200)

  
});
// prom.then(data =>{
//   console.log(data);
// });
.catch((err) => {
  console.log(err);
 
})