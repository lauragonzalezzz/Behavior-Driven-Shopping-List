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
  var string = "<li class='completed_" + this.is_done + "\'><span>" + this.name + "</span><span>"+ this.description + "</span></li>";
  return string;

};