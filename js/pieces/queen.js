function Queen(player){

	var public = new Piece("queen", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9813;', '&#9819;']);
	};

	private.construct();
	return public;

}