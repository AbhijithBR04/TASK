$(document).ready(function(){
    $("#b1").click(function(){
        $("p").append("  appended text")
    })
})

$(document).ready(function(){
    $("#b2").click(function(){
        $("<span> appendto method</span>").appendTo("p")
    })
})