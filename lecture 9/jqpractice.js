 $(function() {
     // jq eill execute this function after page load
     // so do your bindings here
     $("#addButton").click(handleBtnClick);
     // $("#todos li").click(function() {
     //  $(this).remove();
     // $("#todos li").click(removeMe);
     $("#todos ").on("click", "li", removeMe);
 });


 function handleBtnClick() {
     // alert("btn clicked");
     var newTodo = $("#newTodo").val();
     $("#todos").append("<li>New To DO Will appear here</li>");

     if (!newTodo) {
         $("#newTodo").addClass("error");
         return;
     }
     $("#newTodo").removeClass("error");
     $("#newTodo").val("");
     $("#todos").append("<li>" + newTodo + "</li>");
     //$("#todos li").click(removeMe);
 }

 function removeMe() {
     //$(this).remove();
     $(this).fadeOut();
     //remove();
 }