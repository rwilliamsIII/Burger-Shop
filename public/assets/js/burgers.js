$(function(){

    $("#addBurgerBtn").on("click", function(event){
      event.preventDefault();
        let newBurger = {
            burger_name: $("#newBurger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then(function(){
            console.log("Burger Added!");
            location.reload();
        });
    });





})