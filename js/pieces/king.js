function King(player){

	var public = new Piece("king", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9812;', '&#9818;']);
	};

	public.setMoves = function(){
		public.moves.init(public.position, public.player);
		public.moves.setDiagonal(true);
		public.moves.setLine(true);
	};

	private.construct();
	return public;

}