function Queen(player){

	var public = new Piece("queen", player);
	var private = {};

	private.construct = function(){
		public.setHtml("Qn");
	};

	private.construct();
	return public.piece();

}