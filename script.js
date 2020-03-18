const submit = document.querySelector('#submit');
const textArea = document.querySelector('#textarea');

submit.addEventListener("click", e => {
    e.preventDefault();
    var textAreaContent = textArea.value;
    createListItemUsingTemplate(textAreaContent)
    // return textAreaContent;
})

function createListItemUsingTemplate(textAreaContent) {
    
    const template = document.querySelector("#listItemTemplate")
    const domFrag = template.content.cloneNode(true)

    domFrag.querySelector("#checkboxLabel").textContent = textAreaContent;

    document.getElementById("todoList").appendChild(domFrag);
}

