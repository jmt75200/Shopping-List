/*Create a shopping list item Class that defines
*ShoppingListItem
*include all properties and methods 
*@property : name
*@property : description
*/

function ShoppingListItem ( name, description ) {
  this.name = name;
  this.description = description;
  this.is_done = true;
}

/* Methods for Shopping list
*@name : check 
*@name : unckeck
*@render : render
*/

ShoppingListItem.prototype.check = function () {
  this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function () {
  this.is_done = false;
};

ShoppingListItem.prototype.render = function () {
  //return a string in HTML of the list
  var html_output = '<li class="complete'+ this.is_done +'"><span>' + this.name + '</span><span>' + this.description + '</span></li>';

  return html_output;
};


