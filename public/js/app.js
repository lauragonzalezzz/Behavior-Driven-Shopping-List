var myShoppingList = new ShoppingList();


var myList = myShoppingList.render();
contentDiv = document.getElementById('content');
contentDiv.innerHTML = myList;

var form = document.getElementById('form');
form.addEventListener('click', function(event) {
  event.preventDefault();
});

function add_to_shopping_list() {
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);
  console.log('title',title);
  console.log('description',description);
  console.log('new_shopping_list_item',new_shopping_list_item);
  // return myShoppingList.addItem(new_shopping_list_item);
};
