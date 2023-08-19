
let count = 0;
document.getElementById('btn-add').addEventListener('click', function () {
    const input = getInputById('input-todo').trim();
    document.getElementById('input-todo').value = "";
    count = 1 + count;
    if (input.trim() === "") {
        alert("Please insert");
        return;
    }

    const deleteId = "btn-delete-" + count;

    const newElement = document.createElement('div');
    newElement.className = 'bg-gray-100 text-gray-600 flex justify-between items-center px-8 rounded-lg mb-4';
    newElement.innerHTML = `
            <div class="flex">
                <h4 class="mr-6">${count}#</h4>
                <h3 id="row-name" class="text-gray-800">${input}</h3>
            </div>
            <div>
                <button onclick="editElementById(this)" id="btn-edit-${count}" class="btn btn-ghost text-green-500">Edit</button>
                <button onclick="deleteElementById(this)" id="btn-delete-${count}" class="btn btn-ghost text-red-600">X</button>
            </div>`;

    document.getElementById('parent-of-row').appendChild(newElement);
});

// delete element by id
function deleteElementById(element) {
    element.parentNode.parentNode.remove();
}


function editElementById(element) {
    document.getElementById('viewer-id').classList.remove('hidden');
    const elementId = element.id;
    const grandParent = element.parentNode.parentNode;
    const rowName = grandParent.querySelector("#row-name").innerText;
    document.getElementById('input-update').value = rowName;
}

document.getElementById('btn-cancel').addEventListener('click', function() {
    document.getElementById('viewer-id').classList.add('hidden');
});

// onclick update button, remove add hidden and update corresponding row
document.getElementById('btn-update').addEventListener('click', function() {
    

    // hide the input field
    console.log("hi");
});