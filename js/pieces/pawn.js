function Pawn(player){

	var public = new Piece("p", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9817;', '&#9823;']);
	};

	public.addMoves = function(square){
		var piecePosition = public.getPosition();

		if(public.isNotValidMove(square)){
			return false
		}

		if(square.hasEnemyPlayer(public.player)){
			if(piecePosition.x != square.position.x)
				public.moves.push(square);
			return false;
		}

		if(square.isEmpty() && piecePosition.x == square.position.x){
			public.moves.push(square);
			return true;
		}

	};

	public.setMoves = function(){
		public.resetMoves();
		
		public.add(0, 1, true);
		public.add(1, 1, true);
		public.add(-1, 1, true);

		if(public.isStarting() && private.isEmptyFront())
			public.add(0, 2, true);
	};

	private.isEmptyFront = function(){
		var position = public.getPosition();
		position.y += public.direction;

		return Chess.board.getSquare(position).isEmpty();
	}

	private.construct();
	return public;

}