window.onload = function() {
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAdd;
};

function handleAdd() {
    var newTodo = document.getElementById("newToDo").value;
    var todos = document.getElementById("todos");
    var newBtn = document.createElement("Button");
    newBtn.innerHTML = "delete";
    var bindbtn = newBtn.onclick = function(event) {
        var btn = event.target;
        var li = btn.parentNode;
        li.parentNode.removeChild(li);
    }
    var newTodoText = document.createTextNode(newTodo);
    var newLi = document.createElement("li");
    newLi.appendChild(newTodoText);
    todos.appendChild(newLi);
    // var newBtn = document.createElement("Button");
    // newBtn.innerHTML="delete";
    //newBtn.appendChild(newTodoText);
    //console.log(newbtn);
    newLi.appendChild(newBtn);
}

function handleDelete(e) {
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
    var Button = tag.parentNode;
    button.parentNode.removeChild(Button);

}