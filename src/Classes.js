/*@flow*/

//Annotating a class 


class Bar {
	x: string;			//x must be a string
	y: string | number; //y can be a string or number
	constructor(x, y) {
		this.x=x;
		this.y=y
	}
}

const bar1 : Bar = new Bar("hello", 4);
