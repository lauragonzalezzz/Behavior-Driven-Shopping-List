var ShoppingList = function(){
  this.items = [];

  this.addItem = function(item){
  //   if (item !== instanceOf ShoppingListItem) {
  //     throw.new Error('Not a shopping list item');
  // }
    return this.items.push(item);
  };
};

var SL = new ShoppingList();
console.log(this.items);
SL.addItem('hello');
console.log('this.items',this.items);