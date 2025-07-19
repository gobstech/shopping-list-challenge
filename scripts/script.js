function handleShoppingList() {
  // Defining variables
  const form = document.querySelector("form");
  const input = document.querySelector("#newItem");
  const list = document.querySelector("ul#list");
  const deleteImg = document.querySelector(".delete-btn");
  const removedMsg = document.querySelector(".msg-removed");

  // The function below manipulates the list, creating a new HTML list element and cleans the input at the end of the function
  function createNewListItem(event) {
    // Defining creation variables
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    const item = document.createElement("h2");
    const img = document.createElement("img");
    const li = document.createElement("li");
    event.preventDefault();
    li.classList.add("item");
    span.classList.add("check-item");
    checkbox.setAttribute("type", "checkbox");
    item.innerText = input.value;
    img.setAttribute("src", "./assets/icons/Frame-3.svg");
    img.classList.add("delete-btn");
    span.append(checkbox, item);
    li.append(span, img);
    list.append(li);
    input.value = "";
  }

  // Here the code calls the creation function
  form.addEventListener("submit", createNewListItem);

  function deleteListItems(event) {
    if (event.target.classList.contains("delete-btn")) {
      const li = event.target.closest("li");
      li.remove();
      removedMsg.classList.add("active");
    }
  }

  list.addEventListener("click", deleteListItems);

  function closeMsg(event) {
    if (event.target.classList.contains("remove")) {
      removedMsg.classList.remove("active");
    }
  }

  const closeXMark = document.querySelector(".remove");
  closeXMark.addEventListener("click", closeMsg);
}

handleShoppingList();
