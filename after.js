$(document).ready(function(){
    $("#b1").click(function(){
        $("p").after("  new para")
    })
})

$(document).ready(function(){
    $("#b2").click(function(){
        $("<span>insert after effect</span>").insertAfter("p")
    })
})