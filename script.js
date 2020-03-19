const submit = document.querySelector('#submit');
const toDoInput = document.querySelector('#toDoInput');
const template = document.querySelector("#listItemTemplate");
const listContainer = document.getElementById("listContainer");

listContainer.addEventListener('click', (event) => {
    if (event.target.className === 'listContainer__delete-button'){
        event.target.parentNode.remove()
    }
    if (event.target.className === 'itemCheckboxLabel'){
        let label = event.target.parentNode.children[0]
        let checkbox = event.target.parentNode.children[1]
        if (checkbox.checked){
            label.classList.remove('checked')
            checkbox.checked = false;
        } else if (!checkbox.checked){
            label.classList.add('checked')
            checkbox.checked = true;
        }
    }
})

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