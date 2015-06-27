function Pawn(player){

	var public = new Piece("pawn", player);
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

		if(private.isInitialPosition())
			public.add(0, -2, true);
		
		public.add(0, -1, true);
		public.add(1, -1, true);
		public.add(-1, -1, true);
	};

	private.isInitialPosition = function(){
		var position = public.getPosition();
		if(public.player.id == 1 && position.y == 6)
			return true;
		if(public.player.id == 0 && position.y == 1)
			return true;
		return false;
	};

	private.construct();
	return public;

}