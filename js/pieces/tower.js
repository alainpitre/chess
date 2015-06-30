function Tower(player){

	var public = new Piece("tower", player);
	var private = {};

	public.castling = {};

	private.construct = function(){
		public.setHtml(['&#9814;', '&#9820;']);
	};

	public.setCastling = function(position){
		position.x = (position.x == 0) ? 3 : 5;
		public.castling = position;
	};

	public.setMoves = function(){
		public.resetMoves();
		
		public.add(0, -1, false);
		public.add(0, 1, false);
		public.add(1, 0, false);
		public.add(-1, 0, false);
	};

	private.construct();
	return public;

}