$(document).ready(function(){
    $("p").on("click",function(){
        $(this).slideToggle()
    });
    $("button").click(function(){
        $("p").off()
    })
});