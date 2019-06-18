// JavaScript Document
window.setTimeout(function(){
	var todo=new Array();
	var getWord=prompt("what would you like to do ?")
	while(getWord!=="quit")
		{
			if(getWord==="new")
			{
				var newtodo= prompt("Add a neww Todo activity");
				todo.push(newtodo);
			}
			if(getWord==="list")
			{
				console.log(todo);
			}
			getWord=prompt("what would you like to do ?")	
		}
	return 0;
}, 500 );