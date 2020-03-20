const submit = document.querySelector("#submit");
const toDoInput = document.querySelector("#toDoInput");
const template = document.querySelector("#listItemTemplate");
const listContainer = document.getElementById("listContainer");
const searchBar = document.querySelector(".searchInput");
// Fetch data from local storage or generate empty array
let todoArray = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];
// Append todos from local storage
todoArray.forEach(todo => {
  createListItemsFromLocalStorage(todo);
});

// Manage list items with a keyboard
listContainer.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    // Delete an item
    deleteItem(event);
    // Check item logic
    checkOrUncheckItem(event);
    // save to local storage
    localStorage.setItem("list", JSON.stringify(todoArray));
  }
});

// Manage list items with a mouse
listContainer.addEventListener("click", event => {
  // Delete an item
  deleteItem(event);
  // Check item logic
  checkOrUncheckItem(event);
  // save to local storage
  localStorage.setItem("list", JSON.stringify(todoArray));
});

// Delete item function
function deleteItem(e) {
  if (e.target.className === "listContainer__delete-button") {
    e.target.parentNode.remove();

    //Delete from the local storage
    todoArray = todoArray.filter(
      todo => todo.name !== event.target.parentNode.children[0].innerText
    );
  }
}

// Check and uncheck item funtion
function checkOrUncheckItem(e) {
  if (e.target.classList.contains("itemCheckboxLabel")) {
    let label = e.target.parentNode.children[0];
    let checkbox = e.target.parentNode.children[1];
    // uncheck
    if (checkbox.checked) {
      checkbox.checked = false;
      label.classList.remove("checked");
      arrayFilter("checked", false);
      // check
    } else if (!checkbox.checked) {
      checkbox.checked = true;
      label.classList.add("checked");
      arrayFilter("checked", true);
    }
  }
}

// Submit todo item
submit.addEventListener("click", e => {
  e.preventDefault();
  if (!toDoInput.value) return;
  let textAreaContent = toDoInput.value;
  createListItemUsingTemplate(textAreaContent);
  //   local storage logic
  let todo = {};
  todo.name = textAreaContent;
  todoArray.push(todo);
  localStorage.setItem("list", JSON.stringify(todoArray));
  toDoInput.value = "";
  toDoInput.focus();
});
// Append todo onto the list
function createListItemUsingTemplate(textAreaContent) {
  let docFrag = template.content.cloneNode(true);
  docFrag.querySelector(".itemCheckboxLabel").textContent = textAreaContent;
  listContainer.appendChild(docFrag);
}

// generate todos using local storage
function createListItemsFromLocalStorage(obj) {
  let docFrag = template.content.cloneNode(true);
  docFrag.querySelector(".itemCheckboxLabel").textContent = obj.name;
  // check if item has been checked
  if (obj.checked) {
    docFrag.querySelector(".itemCheckbox").checked = true;
    docFrag.querySelector(".itemCheckboxLabel").classList.add("checked");
  }
  listContainer.appendChild(docFrag);
}

// filter array
function arrayFilter(comparing_value, searched_value) {
  todoArray.forEach(todo => {
    if (todo.name === event.target.parentNode.children[0].innerText) {
      todo[comparing_value] = searched_value;
    }
  });
}
