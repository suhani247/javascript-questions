var turtle = 
{
	left : function(){
		console.log('left');
		return this;
	},
	right : function(){
		console.log('right');
		return this;
	},
	top : function(){
		console.log('top');
		return this;
	},
	bottom : function(){
		console.log('bottom');
		return this;
	}
}

var string = turtle.left().right().bottom().top();