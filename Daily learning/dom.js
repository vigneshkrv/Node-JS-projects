// JavaScript Document
//var isblue=false;
//var val=document.querySelector("body");
//
//setInterval(function(){
//	if(!isblue)
//		{
//			val.style.background= "#3356ee"
//		}
//	else{
//		val.style.background="white";
//	}
//	isblue=!isblue;
//},1000)

//var one=document.getElementsByTagName("li")[0];
//one.textContent="Jungle main - Lee sin"
//
//var two=document.querySelectorAll("li")[1];
// two.innerHTML; 

var b=document.querySelector("button");
var b1=document.querySelector("body");


b.addEventListener("click", function(){
	b1.classList.toggle("change");

});

