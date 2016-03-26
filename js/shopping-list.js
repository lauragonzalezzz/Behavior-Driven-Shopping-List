var ShoppingList = function(){

  this.items = [];


  this.addItem = function(item){
    if (item instanceof ShoppingListItem === false) {
      throw new Error('Not a shopping list item.');
    }
    return this.items.push(item);
  };

  this.removeItem = function(item){
    if (!item && this.items.length > 0) {
      this.items.pop();
      return;
    }
    var index = this.items.indexOf(item);
    console.log('index',index);
    if (index === -1) {
      throw new Error('Not in the shopping list.');
    }
    else {
      this.items.splice(index, 1);
    };
  };

  this.render = function(){};
};
