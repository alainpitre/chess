function Tower(player){

	var public = new Piece("tower", player);
	var private = {};

	private.construct = function(){
		public.setHtml("Tw");
	};

	private.construct();
	return public;

}