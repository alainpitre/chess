function Tower(player){

	var public = new Piece("tower", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9814;', '&#9820;']);
	};

	public.setMoves = function(){
		public.moves.reset();
		public.moves.setLine(false);
	}

	private.construct();
	return public;

}