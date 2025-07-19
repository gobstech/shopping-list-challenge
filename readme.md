# QuickList - Shopping List App

**QuickList** is a simple and interactive shopping list app that allows users to add, delete, and manage items with ease. Built using vanilla JavaScript, this app demonstrates the power of DOM manipulation, event delegation, and modern JavaScript practices.

## Features

- **Add Items to List**: Users can input items, click "Add item", and have them appear on the shopping list.
- **Delete Items**: Each item in the list has a delete button to remove the item from the list.
- **Dynamic Messaging**: After deleting an item, a message is shown indicating the item has been removed.
- **Clean Input Field**: After an item is added to the list, the input field is cleared for the next item.

## How It Works

### 1. **Adding Items**

- **Event Listener**: The app listens for the `submit` event on the form element, triggered when the user clicks the "Add item" button.
- **Creating New Elements**: The app creates a new `<li>` element dynamically using `document.createElement()`, with the item name inside an `<h2>` tag and a checkbox for selection.
- **Appending to List**: The newly created `<li>` is appended to the `<ul id="list">` element using `appendChild()`.

### 2. **Deleting Items**

- **Event Delegation**: The app uses event delegation by adding a single event listener to the `<ul id="list">` element. This approach listens for click events on any of its child `<img class="delete-btn">` elements.
- **Remove Item**: When the delete button is clicked, the closest `<li>` parent element is found using `event.target.closest("li")`. The item is then removed from the DOM with the `remove()` method.
- **Confirmation Message**: After an item is deleted, a message (`<div class="msg-removed">`) is displayed, indicating the item has been removed. This message is hidden again by clicking the close button.

### 3. **Dynamic Message Display**

- **Showing and Hiding the Message**: The app shows the `msg-removed` message using the `classList.add("active")` method when an item is deleted, and hides it again using `classList.remove("active")` when the close button is clicked.

## Methods Used

- **`document.querySelector()`**: Used to select DOM elements like the form, input field, list, and delete buttons.
- **`document.createElement()`**: Creates new HTML elements dynamically (e.g., `<li>`, `<span>`, `<h2>`, etc.).
- **`appendChild()`**: Appends child elements (like checkboxes, text, and images) to their parent elements.
- **`classList.add()` & `classList.remove()`**: Used to add and remove classes dynamically for showing and hiding elements, like the "item deleted" message.
- **`closest()`**: A method that helps to navigate the DOM tree upwards to find the nearest matching ancestor, used for selecting the parent `<li>` of the clicked delete button.
- **`remove()`**: Removes an element from the DOM entirely, used to delete an item from the list.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quicklist.git
   ```

2. Open the `index.html` file in your browser to see the app in action.

3. Start adding, deleting, and managing your shopping list items!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
