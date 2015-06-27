function Tower(player){

	var public = new Piece("tower", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9814;', '&#9820;']);
	};

	public.setMoves = function(){
		public.resetMoves();
		
		public.add(0, 1, false);
		public.add(0, -1, false);
		public.add(1, 0, false);
		public.add(-1, 0, false);
	}

	private.construct();
	return public;

}