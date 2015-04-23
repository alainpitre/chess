function Bishop(player){

	var public = new Piece("bishop", player);
	var private = {};

	private.construct = function(){
		public.setHtml("Bi");
	};

	private.construct();
	return public.piece();

}