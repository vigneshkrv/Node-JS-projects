// JavaScript Document
var numOfSquares=6;
var color=generateColor(numOfSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var displayColor=document.getElementById("pickedcolor");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyButton=document.querySelector("#easybtn");
var hardButton=document.querySelector("#hardbtn");
var flag=1;

displayColor.textContent=pickedColor;
resetButton.addEventListener("click",function()
	{
	color=generateColor(numOfSquares);
	resetColorOnClick();
	
	});

easyButton.addEventListener("click", function(){
	
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numOfSquares=3;
	color=generateColor(numOfSquares);	
	if(flag===1){
		resetColorOnClick();
	}
	
	for(var i=3;i<6;i++)
		{
			squares[i].style.display="none";
		}
	flag=0;
});

hardButton.addEventListener("click", function(){
	for(var i=3;i<6;i++)
		{
			squares[i].style.display="block";
		}
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numOfSquares=6;
	color=generateColor(numOfSquares);
	if(flag===0)
		{
			resetColorOnClick();
		}
	flag=1;
});

for( var i=0; i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color[i];
		
		//clicking the squares
		
		squares[i].addEventListener("click", function(){
			var clickedColor= this.style.backgroundColor;
			if(clickedColor===pickedColor)
				{
					message.textContent="Correct!"
					changeColor(clickedColor);
					h1.style.backgroundColor=clickedColor;
					resetButton.textContent="play again?"
				}
			else{
				this.style.backgroundColor="#232323";
				message.textContent="try again"
			}
		});
	}

function changeColor(color){
	for(var i=0;i<squares.length;i++)
		{
			squares[i].style.backgroundColor=color;
		}
}

function resetColorOnNew(color){
	for(var i=0;i<squares.length;i++)
		{
			squares[i].style.backgroundColor=color[i];
		}
}

function pickColor()
{
	var randColor=color[Math.floor(Math.random()*color.length)];
	return randColor;
}

function generateColor(num)
{
	var colorArray=[];
	for(var i=0;i<num;i++)
		{
			colorArray.push(randomColor());
		}
	return colorArray;
}

function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	
	return "rgb("+r+", "+g+", "+b+")";
}

function resetColorOnClick()
{
	pickedColor=pickColor()
	displayColor.textContent=pickedColor;
	resetColorOnNew(color);
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New colors"
}

console.log("hello vignesh")