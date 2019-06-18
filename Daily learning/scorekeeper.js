// JavaScript Document
var p1=0;
var p2=0;
var round=document.getElementById("playrounds").textContent;
var b1=document.getElementById("pb1");
var b2=document.getElementById("pb2");

var r=document.getElementById("rounds");

r.addEventListener("change",function(){
	document.getElementById("playrounds").textContent=r.value;	
	round=r.value;
})

b1.addEventListener("click",function(){
	if(p1!=round && p2!=round)
		{
			p1+=1;
			if(p1==round)
				{
					document.getElementById("player1").classList.add("green")
				}
			document.getElementById("player1").textContent=p1;
		}
	
});

b2.addEventListener("click",function(){
	if(p1!=round && p2!=round)
		{
			p2+=1;
			if(p2==round)
				{
					document.getElementById("player2").classList.add("green");
					
				}
			document.getElementById("player2").textContent=p2;
			
		}
	
});

var res=document.getElementById("reset");
res.addEventListener("click",function(){
	document.getElementById("player1").textContent=0;
	document.getElementById("player2").textContent=0;
	document.getElementById("playrounds").textContent=0;
	r.value=0;
	document.getElementById("player1").classList.remove("green")
	document.getElementById("player2").classList.remove("green")
});





