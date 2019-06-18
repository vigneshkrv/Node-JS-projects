// JavaScript Document
var color=generateColor(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var displayColor=document.getElementById("pickedcolor");
displayColor.textContent=pickedColor;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

resetButton.addEventListener("click",function()
	{
	color=generateColor(6);
	
	pickedColor=pickColor()
	displayColor.textContent=pickedColor;
	resetColorOnClick(color);
	h1.style.backgroundColor="#232323";
	resetButton.textContent="New colors"
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

function resetColorOnClick(color){
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