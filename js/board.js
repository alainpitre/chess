function Board($container){

	var public = {};
	var private = {};

	private.square = [];
	private.board = undefined;

	public.construct = function(){
		private.initBoard($container);
		private.buildSquares();
	};

	private.initBoard = function($container){
		private.board = private.getJqueryBoard()
		$container.html(private.board);
	};

	private.buildSquares = function(){
		for(var y = 0; y < 8; y++){
			private.square[y] = {};
			for(var x = 0; x < 8; x++){
				private.appendSquare(x, y);
			}
		}
	};

	private.appendSquare = function(x, y){
		var square = new Square(x, y);
		private.square[y][x] = square;
		private.board.append(square);
	};

	private.getJqueryBoard = function(){
		var $board = $('<div>');
		$board.attr('id', 'board');
		return $board;
	};

	public.getSquare = function(x, y){
		return private.square[x][y];
	};

	public.construct();
	return public;

}