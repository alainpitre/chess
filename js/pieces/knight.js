function Knight(player){

	var public = new Piece("knight", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9816;', '&#9822;']);
	};

	private.construct();
	return public;

}