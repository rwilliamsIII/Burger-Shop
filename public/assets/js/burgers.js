$(function(){

    $("#addBurgerBtn").on("click", function(event){
      event.preventDefault();
        var newBurger = {
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

    $(".devourBurger").on("click", function(event) {
      event.preventDefault();

        var id = $(this).data("id");
        console.log(id);
        var isDevoured = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        })
        .then(function(){
            console.log("Burger Devoured!");
            location.reload();
        });
        
    });





});