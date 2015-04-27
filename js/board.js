function Board($container){

	var public = {};
	var private = {};

	private.square = [];
	private.board = undefined;

	public.construct = function(){
		private.initBoard($container);
		private.loadSquares();
	};

	private.initBoard = function($container){
		private.board = $('<div>');
		private.board.attr('id', 'board');
		$container.html(private.board);
	};

	private.loadSquares = function(){
		for(var y = 0; y < 8; y++){
			for(var x = 0; x < 8; x++){
				private.buildSquare(x, y);
			}
		}
	};

	private.buildSquare = function(x, y){
		var square = new Square(x, y);
		if(private.square[x] == undefined)
			private.square[x] = {};
		private.square[x][y] = square;
		private.board.append(square);
	};

	public.getSquare = function(position){
		return private.square[position.x][position.y];
	};

	public.squareExist = function(position){
		return private.square[position.x][position.y] != undefined;
	}	

	public.construct();
	return public;

}