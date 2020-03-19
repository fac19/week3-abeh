const submit = document.querySelector("#submit");
const toDoInput = document.querySelector("#toDoInput");
const template = document.querySelector("#listItemTemplate");
const listContainer = document.getElementById("listContainer");

listContainer.addEventListener("click", event => {
  if (event.target.className === "listContainer__delete-button") {
    event.target.parentNode.remove();
  }

  if (event.target.classList.contains("itemCheckboxLabel")) {
    let label = event.target.parentNode.children[0];
    let checkbox = event.target.parentNode.children[1];
    if (checkbox.checked) {
      checkbox.checked = false;
      label.classList.remove("checked");
    } else if (!checkbox.checked) {
      checkbox.checked = true;
      label.classList.add("checked");
    }
  }
});

submit.addEventListener("click", e => {
  e.preventDefault();
  if (!toDoInput.value) return;
  let textAreaContent = toDoInput.value;
  createListItemUsingTemplate(textAreaContent);
  toDoInput.value = "";
});

function createListItemUsingTemplate(textAreaContent) {
  const docFrag = template.content.cloneNode(true);
  docFrag.querySelector(".itemCheckboxLabel").textContent = textAreaContent;
  listContainer.appendChild(docFrag);
}
