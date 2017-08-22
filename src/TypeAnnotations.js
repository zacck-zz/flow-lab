/*@flow*/

function foo(x: number, y:number) : number   {
	return x + y;
}

foo('Hello', 43);

/*The above will fail because the first input doesnt match the type annotated to it*/
