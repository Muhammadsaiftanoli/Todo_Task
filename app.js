

let todoInput = document.querySelectorAll(" #new-todo-receive");
let todoDivPrint = document.querySelectorAll(".todo-list");
let todoArray = [];

function add() {
    let userInput = todoInput[0].value;
    todoArray.push(userInput);
    printTodo();
    todoInput[0].value = "";
}

function printTodo() {
    todoDivPrint[0].innerHTML = "";
    for (let i = 0; i < todoArray.length; i++) {
        todoDivPrint[0].innerHTML += `
        <p id = "todo-${i}">
        ${todoArray[i]}
        <button onclick = "editTodo(${i})">Eidt</button>
        <button onclick = "deleteTodo(${i})">Delete</button>
        </p>
        `;
    }
}

function deleteTodo(index) {
    todoArray.splice(index, 1);
    printTodo();
    console.log("Your concern line has edited.");
}

let addTodoDiv = document.querySelectorAll("#add-new-todo");
let editTodoDiv = document.querySelectorAll("#edit-todo");
let editTodoInput = document.querySelectorAll("#eidit-todo-recieve")
let editIndex; 

function editTodo(index) {
    if (isEditing) {
        showError()
    }
    else {
        editIndex = index;
        editTodoInput[0].value = todoArray[index];
        togleform()
    }
}

function saveUpdateTodo() {
    togleform()
    todoArray.splice(editIndex, 1, editTodoInput[0].value)
    printTodo();
}

let isEditing = false;

function togleform() {
    if (!isEditing) {
        editTodoDiv[0].className = "";
        addTodoDiv[0].className = " hide";
    }
    else {
        editTodoDiv[0].className = " hide";
        addTodoDiv[0].className = "";
    }
    isEditing = !isEditing;
}

let pEle = document.querySelectorAll(".p-element");

function showError() {
    pEle[0].innerHTML = "First save edited todo."
    setTimeout(function () {
        pEle[0].innerHTML = "";
    }, 3000);
}

