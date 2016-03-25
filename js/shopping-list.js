var ShoppingList = function(){
  this.items = [];

  this.addItem = function(item){
  //   if (item !== instanceOf ShoppingListItem) {
  //     throw.new Error('Not a shopping list item');
  // }
    return this.items.push(item);
  };
};
