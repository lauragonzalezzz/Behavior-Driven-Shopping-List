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

  checkboxElement = "<input id='checkbox" + idx + "' type='checkbox' onchange='changeCheckedStatus(" + idx +", event.target)'>";
  buttonElement = "<button id='trashBtn' onclick='removeItemButtonClicked(" + idx + ")'>X</<button>";
  var string = "<li class='completed_" + this.is_done + "\'>" + checkboxElement + "<span>" + this.name + ": </span><span>"+ this.description + " </span><span>" + buttonElement + "</span></li>";

  return string;
};
