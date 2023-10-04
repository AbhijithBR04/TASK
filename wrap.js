$(document).ready(function(){
    $("#b1").click(function(){
        $("p").wrap("<div></div>");
    });
})

$(document).ready(function(){
    $("#b2").click(function(){
        $("p").wrapAll("<div></div>");
    });
})