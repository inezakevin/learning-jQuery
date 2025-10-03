$(document).ready(function(){
     //selecting div and change its content
            $("#myDiv")
            .html("<h1>Hello jQuery!</h1>")
            .css({
                color: "green",
                "font-size": "18px",
                "text-align": "center"
            })
            .fadeIn(1000);
            //selecting paragraph and change its content
            $("p")
            .css({
                "text-align" : "center"
            })
            .fadeIn(2000)
            .delay(1000)
            //used function to make first text of paragraph appear before changing it
            .fadeOut(1000, function(){
                $(this)
                .text("I like jQuery")
                .css({
                    "background-color" : "grey",
                    "font-size" : "15px"
                })
                .fadeIn(2000);
            });
            //button click event to hide and show section
            $("button").on({
                click : function(){
                    $("#container").toggle();
                },
                mouseenter : function(){
                    $(this).css("background-color" , "grey")
                },
                mouseleave : function(){
                    $(this).css("background-color" , "")
                }
            });
});