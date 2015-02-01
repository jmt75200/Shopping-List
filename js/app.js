//Create an instance that invokes ShoppingList and stores the output into a variable 

var shoppingListPage = new ShoppingList();

//print to content div
document.getElementById("content").innerHTML = ShoppingList();

//create an add_list_item_button function

function add_list_item_button() {

//will read the value of title and description fields
//stored in a new variable, new_shopping_list_item
  
  var new_shopping_list_item = document.getElementById('list_form');

  //constructing a new ShoppingListItem passing the values into the title and description
  
}

//invoke shopping list's addItem by passing in new_shopping_list_item

//re-render shopping list