function King(player){

	var public = new Piece("king", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9812;', '&#9818;']);
	};

	public.setMoves = function(){
		public.resetMoves();

		public.add(0, -1, true);
		public.add(1, -1, true);
		public.add(1, 0, true);
		public.add(1, 1, true);
		public.add(0, 1, true);
		public.add(-1, 1, true);
		public.add(-1, 0, true);
		public.add(-1, -1, true);

		if(private.hasRightCastling())
			private.addCastling({'x' : 6, 'y' : public.getStartingRow()});

		if(private.hasLeftCastling())
			private.addCastling({'x' : 2, 'y' : public.getStartingRow()});

	};

	private.addCastling = function(destination){
		var square = Chess.board.getSquare(destination);
		if(destination.x == 2)
			square.castling = {'x' : 0, 'y' : destination.y};
		else
			square.castling = {'x' : 7, 'y' : destination.y};
		public.moves.push(square);
	};

	private.hasTower = function(position){
		var square = Chess.board.getSquare(position);
		var tower = square.getPiece();
		return tower != undefined && tower.isStarting() && public.isStarting();
	};

	private.hasRightCastling = function(){
		var y = public.getStartingRow();
		var isEmptyA = Chess.board.getSquare({'x' : 5, 'y' : y}).isEmpty();
		var isEmptyB = Chess.board.getSquare({'x' : 6, 'y' : y}).isEmpty();
		return isEmptyA && isEmptyB && private.hasTower({'x' : 1, 'y' : y});
	};

	private.hasLeftCastling = function(){
		var y = public.getStartingRow();
		var isEmptyA = Chess.board.getSquare({'x' : 1, 'y' : y}).isEmpty();
		var isEmptyB = Chess.board.getSquare({'x' : 2, 'y' : y}).isEmpty();
		var isEmptyC = Chess.board.getSquare({'x' : 3, 'y' : y}).isEmpty();
		return isEmptyA && isEmptyB && isEmptyC && private.hasTower({'x' : 8, 'y' : y});
	};

	private.isPossibleCheck = function(square){
		var enemyMoves = public.player.enemy.allMoves;
		for(var i = 0; i < enemyMoves.length; i++){
			if(enemyMoves[i] == square){
				return true;
			}
		}
		return false;
	};

	public.isCheckMate = function(){
		for(var i = 0; i < public.moves.length; i++){
			if(private.isPossibleCheck(public.moves[i]) == false)
				return false;
		}
		return true;
	};

	private.construct();
	return public;

}