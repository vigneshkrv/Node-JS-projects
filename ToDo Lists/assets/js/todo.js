

$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
    
});


$("ul").on("click","li span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type=text]").keypress(function(event){
    if(event.which===13 && $(this).val()!=="")
    {
        var v=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i> </span>"+v+"</li>");
    }
});

$("#plus").click(function(){
    $("input[type=text]").fadeToggle();
});