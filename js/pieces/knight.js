function Knight(player){

	var public = new Piece("knight", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9816;', '&#9822;']);
	};

	public.setMoves = function(){
		public.moves.init(public.position, public.player);
		public.moves.setL();
	};

	private.construct();
	return public;

}