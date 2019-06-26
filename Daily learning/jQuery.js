// JavaScript Document
$("div").css({
	background:"purple"
});
//$(".highlight").css("width","200px")
$("#third").css("border","2px solid orange")
$("div:first").css({
	color:"pink"
});

$("button").on("dblclick",function(){
	alert("double clicked the button");
});

$("button").click(function(){
	alert("single clicked the button");
});

$("div").on("click",function(){
	$(this).css("background","white")
})