const submit = document.querySelector('#submit');
const toDoInput = document.querySelector('#toDoInput');
const template = document.querySelector("#listItemTemplate");
const listContainer = document.getElementById("listContainer");

submit.addEventListener("click", e => {
    e.preventDefault();
    var textAreaContent = toDoInput.value;
    createListItemUsingTemplate(textAreaContent)
})

function createListItemUsingTemplate(textAreaContent) {
    
    const docFrag = template.content.cloneNode(true);
    docFrag.querySelector(".itemCheckboxLabel").textContent = textAreaContent;
    listContainer.appendChild(docFrag);
}

