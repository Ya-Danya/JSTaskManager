let createBtn = document.getElementById('create');
let listElem = document.getElementById('list');
let inputName = document.getElementById('input_name');

createBtn.onclick = function() {
    if (String(inputName.value).length == 0) {
        return;
    }
    listElem.insertAdjacentHTML("beforeend", `
    <li class="list-group-item d-flex justify-content-between align-items-center mb-2" style="border-radius: 10px;">
        <span>${inputName.value}</span>
        <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>`);
    inputName.value = "";
};