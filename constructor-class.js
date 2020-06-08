class shoppingList{
  constructor (item, number){
    this.item = item;
    this.nr = number;

  } 
  list(){
     return  this.item +" and number is "+this.nr;
  }
}
 class product extends shoppingList{
   constructor( item,number, color, cost){
      super(item,number);
     
      this.itemcolor = color;
     this.cost = cost;


   }
   sayList(){
     return  "The list is " +this.list()+ "  And the color is "+this.itemcolor;
   }
  }
 const object =new product("apple,grapes,berries",3,"green",5);
 document.getElementById("list").innerText=object.sayList();