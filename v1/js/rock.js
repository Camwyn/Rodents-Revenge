function rock (x,y) {
	this.symbol = '&#9746;';
	this.type = 'this';
	this.movable = false;
	this.x = x;
	this.y = y;
	this.fatal = false;

	board.place( this );
};
