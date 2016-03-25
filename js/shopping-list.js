var ShoppingList = function(){
  this.items = [];

  this.addItem = function(item){
    return this.items.push(item);
  };
};