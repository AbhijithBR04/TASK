$(document).ready(function(){
    $("p").click(function(){
        $(this).slideToggle();
    });
    $("button").click(function(){
        $("p").unbind();
    });
});