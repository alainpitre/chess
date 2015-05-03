function Board($container){

	var public = {};
	var private = {};

	public.eat = undefined;
	public.board = undefined;

	private.square = [];

	public.construct = function(){
		private.initBoard();
		private.initEat();
		private.loadSquares();
	};

	private.initBoard = function(){
		public.board = $('<div>');
		public.board.attr('id', 'board');
		$container.append(public.board);
	};

	private.initEat = function(){
		public.eat = $('<div>');
		public.eat.attr('id', 'eat');
		$container.append(public.eat);
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
		public.board.append(square);
	};

	public.getSquare = function(position){
		if(public.squareExist(position) == false)
			return undefined;
		return private.square[position.x][position.y];
		
	};

	public.squareExist = function(position){
		return private.square[position.x] != undefined && private.square[position.x][position.y] != undefined;
	}	

	public.construct();
	return public;

}