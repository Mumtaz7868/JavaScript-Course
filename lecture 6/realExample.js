function update() {
    console.log("Updating Result");
    var input = document.getElementById("myinput");
    console.log(input.value);
    var output = document.getElementById("output");
    output.innerHTML = input.value;
}