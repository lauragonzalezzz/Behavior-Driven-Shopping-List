var ShoppingListItem = function(name, description){
		this.name = name;
		this.description = description;
    this.is_done = false;

};

ShoppingListItem.prototype.check = function(){
  return this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function(){
  return this.is_done = false;
};

ShoppingListItem.prototype.render = function(){
  var idx = myShoppingList.items.indexOf(this);
  // var checkbox = document.createElement('input');
  // checkbox.id="checkbox" + idx;
  // checkbox.type ="checkbox";
  // checkbox.addEventListener('click', function(){
  //   console.log('hello');
  // });
  checkboxElement = "<input id='checkbox" + idx + "' type='checkbox' onclick='console.log(\"hello\")'>";

  console.log('checkboxElement',checkboxElement);

  var string = "<li class='completed_" + this.is_done + "\'>" + checkboxElement + "<span>" + this.name + "</span><span>"+ this.description + "</span></li>";
  return string;

};
