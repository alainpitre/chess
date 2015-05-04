function Bishop(player){

	var public = new Piece("bishop", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9815;', '&#9821;']);
	};

	public.setMoves = function(){
		public.moves.init(public.position, public.player);
		public.moves.setDiagonal(false);
	}

	private.construct();
	return public;


}