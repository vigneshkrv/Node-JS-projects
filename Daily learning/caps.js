function factorial(num)
{
	while(num!==0)
		{
	var result=1;
	for(var i=num;i>0;i--)
		{
			result=result*i;
		}
	return result;
		}
	return 1;
}
var num=0
console.log(num+"! is "+ factorial(num));

function kebabToSnake(kebab)
{
	var snake=kebab.replace(/-/g,"_");
	return snake;
	
}

var ar="hello-bois-"
console.log(kebabToSnake(ar));