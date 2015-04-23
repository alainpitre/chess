function King(player){

	var public = new Piece("king", player);
	var private = {};

	private.construct = function(){
		public.setHtml("Kg");
	};

	private.construct();
	return public.piece();

}