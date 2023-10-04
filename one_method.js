$(document).ready(function(){
    $("p").one("click",function(){
        $(this).animate({fontSize: "+=6px"})
    });
});