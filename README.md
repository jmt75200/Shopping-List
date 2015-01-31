// ----------------- [ Shopping List ] ------------------//

// Implimentation 

:: Building the Shopping List Classes ::

// ---- [ INDEX.HTML ] ---- //
Two Implimentation scripts are located at before the end of the body tag.

// ---- [ Shopping List item . js ] ---- //
create a class that defines ShoppingListItem 
ShoppingListItem will have all the properties and methods defined in the BDD spec

// ---- [ Shopping List. js ] ---- //
create a class that defines ShoppingList
ShoppingList will have all the properties and methods defined in the BDD spec

:: Rendering a shopping list to the browser ::

// ---- [ INDEX.HTML ] ---- //
In a standard HTML 5 document, include a single empty div with an id of content before the end of the body tag, include 3 shopping list scripts.

Create a form that has 2 text fields, title  and description

Add a button element with the contents of "add to shopping list" and an id of add_shopping_list_item_button

Add a click event handler to the add_shopping_list_item_button that will run a function called add_to_shoppnig_list()

// ---- [ APP.JS ] ---- //
Create an instance of ShoppingList.

Invoke the shopping_list object's render() method, and store the output to a variable. Write the resulting output html into the content div.

Create an add_shopping_list_item_button function that will read the value of the title and description fields, then create a new variable named new_shopping_list_item that will store the result of constructing a new ShoppingListItem and passing in the values of title and description.

Invoke your shopping list's addItem by passing in your new_shopping_list_item.

Re-render the shopping list.

// BDD Testing using Mocha and Chai

// ---- [ Shopping list item ] ---- //

ShoppingListItem is a class

ShoppingListItem has a property named name

ShoppingListItem has a property named description

ShoppingListItem has a property named is_done

ShoppingListItem has a constructor method that accepts 2 arguments, name and description
  the constructor method sets the new instances name and description properties using the arguments passed in

ShoppingListItem has a method named check
  calling the instance's check method will set it's is_done property to true

ShoppingListItem has a method named uncheck
  calling the instance's uncheck method will set it's is_done property to false

ShoppingListItem has a method named render
  calling the instance's render method will return a string formatted in html, in an
    element. ex: <li class="[is_done]"><span>[name]</span> <span>[description]</span></li> 

// ---- [ Shopping List ] ---- //
ShoppingList is a class

ShoppingList has a property named items

ShoppingList has a constructor method that initializes items as an empty Array
ShoppingList has a method named addItem that accepts a single 

ShoppingListItem argument
  invoking the addItem method by passing in a ShoppingListItem object should add that object to the items array
  invoking the addItem method by passing in anything else that is not a ShoppingListItem object should immediately throw an error

ShoppingList has a method named removeItem that accepts a single 

ShoppingListItem argument
  invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array
  invoking the removeItem method with no parameters should remove the last item in the items list, if there are any items, else it does nothing
  invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (that exists in the items array) should immediately throw an error
ShoppingList has a method named render
  calling the instance's render method will concatenate the result of calling render() on each item in this object's items array, wrapping it in a
    element, and returning an html formatted string. ex: <ul>...[all the li elements from ShoppingListItem.render()]...</ul>