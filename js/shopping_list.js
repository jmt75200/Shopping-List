/*Creating a class that defines ShoppingList
*with alll the properties and methods
*@property items : Establishes an empty array
*
**/
function ShoppingList () {
  this.items = [];

}

/* Shopping List Methods
*@name : addItem accepts a single ShoppingListItem argument
*@name : removeItem accepts a single ShoppingListItem argument
*@name : render concats all items rendered within ShoppingListItem render(). Prints unordered list into html_output
*/
ShoppingList.prototype.addItem = function( item ) {
  //add item from Shopping List Item to Shopping List.item array
  if ( item instanceof ShoppingListItem ){
      this.items.push( item ); 
    } else { 
    //if item is not a ShoppingListItem then return false
    return 'Error';
  }
};

ShoppingList.prototype.removeItem = function( item ) {
  //if item exists remove that object from the item array
  if ( item instanceof ShoppingListItem ){
    this.forEach(function (curr, index){
      if (item === curr){
        //.pop() || .shift() || .splice()
        this.items.splice(0, 1);
      }
    });
  } else if ( item === undefined ){
    //if no argument is passed then remove last item 
    if ( item instanceof ShoppingListItem ){
      this.item.pop();
    }
  } else { 
    // if item does not exist return Error, 
    return 'Error';  
  }
};

ShoppingList.prototype.render = function( ) {
  var listItems = "";
  //loop through item and concat
  this.items.forEach(function(curr, index){
    //.concat ea item and wrap inside an li element from ShoppingListItem.render()
    return listItems.concat(item.render());
  });
  //return string of list elements
  var html_output = '<ul>' + listItems + '</ul>';
  return html_output;
};
