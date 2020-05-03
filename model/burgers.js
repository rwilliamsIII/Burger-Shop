const orm = require("../config/orm");

$(function(){
console.log("Ready!")

$("#addBurgerBtn").on("click", function(event){
    event.preventDefault();

    let addedBurger = {
        burger_name: $("#newBurger").val().trim()
    };

$.ajax("/api/burgers", {
    type: "POST",
    data: addedBurger
  }).then(
    function() {
      console.log("Burger Added!");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});










});




