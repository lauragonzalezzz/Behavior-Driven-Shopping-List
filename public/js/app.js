var myShoppingList = new ShoppingList();

var form = document.getElementById('form');
form.addEventListener('click', function(event) {
  event.preventDefault();
});

function add_to_shopping_list() {
  var title = document.getElementById('title').value;
  var description = ' ' + document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);

  myShoppingList.addItem(new_shopping_list_item);

  var myList = myShoppingList.render();
  var contentDiv = document.getElementById('content').innerHTML = myList;
  return;
};


