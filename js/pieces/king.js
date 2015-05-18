function King(player){

	var public = new Piece("king", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9812;', '&#9818;']);
	};

	public.setMoves = function(){
		public.moves.reset();
		public.moves.setDiagonal(true);
		public.moves.setLine(true);
	};

	private.construct();
	return public;

}