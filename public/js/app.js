var myShoppingList = new ShoppingList();

var form = document.getElementById('form');
form.addEventListener('click', function(event) {
  event.preventDefault();
});

var idx = 0;
function add_to_shopping_list() {
  var title = document.getElementById('title').value;
  var description = ' ' + document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);

  myShoppingList.addItem(new_shopping_list_item);

  var myList = myShoppingList.render();
  var contentDiv = document.getElementById('content')
  contentDiv.innerHTML = myList;
  return;
};

function changeCheckedStatus(idx, checkbox) {
  var item = myShoppingList.items[idx];
  if (checkbox.checked === true) {
    item.check();
  }
  else {
  item.uncheck();
  }
  // var myList = myShoppingList.render();
  // var contentDiv = document.getElementById('content')
  // contentDiv.innerHTML = myList;
  return;
};
