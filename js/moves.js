function Moves(piece){

	var public = {};
	var private = {};

	public.qts = 0;

	private.squares = {};
	private.direction = 0;
	private.piece = undefined;

	public.construct = function(){
		private.piece = piece;
		private.direction = (piece.player.id == 1) ? 1 : -1;
	};

	public.reset = function(){
		private.piece.player.enemy.isCheck = false;
		private.squares = {};
	};

	public.getPosition = function(){
		return {x : private.piece.position.x, y : private.piece.position.y};
	};

	public.getSquares = function(){
		return private.squares;
	};

	public.setDiagonal = function(isSingle){
		private.add(1, 1, isSingle);
		private.add(1, -1, isSingle);
		private.add(-1, -1, isSingle);
		private.add(-1, 1, isSingle);
	};

	public.setLine = function(isSingle){
		private.add(0, 1, isSingle);
		private.add(0, -1, isSingle);
		private.add(1, 0, isSingle);
		private.add(-1, 0, isSingle);
	};

	public.setL = function(){
		private.add(-2, 1, true);
		private.add(-1, 2, true);
		private.add(2, 1, true);
		private.add(1, 2, true);
		private.add(-2, -1, true);
		private.add(-1, -2, true);
		private.add(2, -1, true);
		private.add(1, -2, true);
	};

	public.setSingle = function(){
		private.add(0, -1, true);
		private.add(1, -1, true);
		private.add(-1, -1, true);
	};

	public.setDouble = function(){
		private.add(0, -2, true);
	};

	public.isValid = function(position){
		return private.squares[position.x+","+position.y] != undefined;
	};

	private.isFront = function(square){
		return private.piece.position.x == square.position.x;
	};

	private.isDiagonal = function(square){
		return private.isFront(square) == false;
	};

	private.isPawn = function(){
		return private.piece.type == "pawn";
	};

	private.addSquare = function(position){

		var square = Chess.board.getSquare(position);
		var isNotValidMove = square == undefined || square.hasSamePlayer(private.piece.player);
		var hasEnemyPlayer = square != undefined && square.hasEnemyPlayer(private.piece.player);

		if(isNotValidMove){
			return true;
		}

		if(hasEnemyPlayer && private.isPawn() && private.isFront(square)){
			return true;
		}

		if(hasEnemyPlayer && private.isPawn() && private.isDiagonal(square)){
			private.squares[position.x+","+position.y] = square;
			return true;
		}

		if(square.isEmpty() && private.isPawn() && private.isFront(square)){
			private.squares[position.x+","+position.y] = square;
			return false;
		}

		if(hasEnemyPlayer){
			private.squares[position.x+","+position.y] = square;
			return true;
		}

		if(square.isEmpty() && private.isPawn() == false){
			private.squares[position.x+","+position.y] = square;
			return false;
		}

	};

	private.isNotValidMove = function(square){
		if(square != undefined)
			return square.hasSamePlayer(private.piece.player) == true;
		else
			return true;
	};

	private.add = function(x, y, isSingle){
		var position = public.getPosition();
		var stop = false;

		while (stop == false) {

	    	position.x += x;
	    	position.y += y * private.direction;

	    		stop = private.addSquare(position);

	    	if(isSingle)
	    		stop = true;

		}

	};

	public.construct();
	return public;

}
