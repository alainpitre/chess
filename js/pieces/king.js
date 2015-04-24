function King(player){

	var public = new Piece("king", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9812;', '&#9818;']);
	};

	private.construct();
	return public;

}