function Knight(player){

	var public = new Piece("knight", player);
	var private = {};

	private.construct = function(){
		public.setHtml("Kn");
	};

	private.construct();
	return public.piece();

}