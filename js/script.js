$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("#button").click(function(){
    let userInput=$("input").val();
$(".road").html(userInput);
});
$(".drill-1-button").click(function() {
let name = $(".drill-1-input").val();
    $(".drill-1-output").append("Welcome, " + name + "!");
});


  
  
  
  
});
