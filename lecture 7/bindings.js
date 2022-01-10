console.log("Starting");

function handleAddNewTodo() {

    console.log("Handling Add New Todo Button");
}

function doBinding() {
    console.log("Bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAddNewTodo;
}
window.onload = doBinding;
console.log("Finished");