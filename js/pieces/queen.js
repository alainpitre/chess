function Queen(player){

	var public = new Piece("queen", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9813;', '&#9819;']);
	};

	public.setMoves = function(){
		public.moves.init(public.position, public.player);
		public.moves.setDiagonal(false);
		public.moves.setLine(false);
	};

	private.construct();
	return public;

}