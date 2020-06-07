const shoppingList = ["eggs", "milk", "sugar","salt","banana"];
const newList =shoppingList.map((item) => {
return item+ "New" })

 console.log(newList);
 document.getElementById("list").innerHTML = newList;