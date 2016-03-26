var ShoppingList = function(){
  this.items = [];

  this.addItem = function(item){
    if (item instanceof ShoppingListItem === false) {
      throw new Error('Not a shopping list item');
    }
    return this.items.push(item);
  };

  this.removeItem = function(){};
};
