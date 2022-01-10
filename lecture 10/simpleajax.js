console.log("code starting");
$(function() {
    console.log("Doing Bindings");
    $("#load").click(sendAjax);
});

function sendAjax() {
    console.log("sending ajax Request");
    // send request here
    $.get("student.txt", handleResponse);
    console.log("Request sent");

}

function handleResponse(respose) {
    console.log("resposne recieved")
        //console.log(respose);
    $("#result").empty();
    $("#result").append(respose);
}
console.log("code Finished");