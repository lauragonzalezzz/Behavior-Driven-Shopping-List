var myShoppingList = new ShoppingList();

var form = document.getElementById('form');
form.addEventListener('click', function(event) {
  event.preventDefault();
});

function displayList(){
  var myList = myShoppingList.render();
  var contentDiv = document.getElementById('content')
  contentDiv.innerHTML = myList;
};

function add_to_shopping_list() {
  var title = document.getElementById('title').value;
  var description = ' ' + document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);

  myShoppingList.addItem(new_shopping_list_item);
  displayList();

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
};
