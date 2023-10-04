$(document).ready(function(){
    $("p").select("click",function(){
        $("p").after("clicked")
    });
    $("p").click(function(){
        $("p").trigger("select")
    })
});