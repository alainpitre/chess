function Pawn(player){

	var public = new Piece("pawn", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9817;', '&#9823;']);
	};

	public.setMoves = function(){
		if(public.isInitialPosition())
			public.moves.setDouble();
		public.moves.setSingle();
	};

	public.isInitialPosition = function(){
		if(player == 1 && public.position.y == 6)
			return true;
		if(player == 0 && public.position.y == 1)
			return true;
		return false;
	};

	private.construct();
	return public;

}