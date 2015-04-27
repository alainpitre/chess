function Pawn(player){

	var public = new Piece("pawn", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9817;', '&#9823;']);
	};

	public.getMoves = function(){
		var currentPosition = public.getPosition();
		console.log(currentPosition);
	}

	private.construct();
	return public;

}