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
  return "<ul><li class='completed_false'"+"><span>"+"Grapes"+"</span><span>"+"are happy little things."+"</span></li><ul>";

};