function Pawn(player){

	var public = new Piece("pawn", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9817;', '&#9823;']);
	};

	public.getMoves = function(){
		console.log("pawn moved");
	}

	private.construct();
	return public;

}