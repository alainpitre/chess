function Bishop(player){

	var public = new Piece("bishop", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9815;', '&#9821;']);
	};

	private.construct();
	return public;


}