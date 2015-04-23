function Pion(player){

	var public = new Piece("pion", player);
	var private = {};

	private.construct = function(){
		public.setHtml("Pa");
	};

	private.construct();
	return public.piece();

}