function Pawn(player){

	var public = new Piece("pawn", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9817;', '&#9823;']);
	};

	public.setMoves = function(){
		public.moves.reset();

		if(public.isInitialPosition())
			public.moves.setDouble();
		
		public.moves.setSingle();
	};

	public.isInitialPosition = function(){
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