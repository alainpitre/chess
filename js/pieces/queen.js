function Queen(player){

	var public = new Piece("queen", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9813;', '&#9819;']);
	};

	public.setMoves = function(){
		public.resetMoves();
		
		public.add(0, -1, false);
		public.add(1, -1, false);
		public.add(1, 0, false);
		public.add(1, 1, false);
		public.add(0, 1, false);
		public.add(-1, 1, false);
		public.add(-1, 0, false);
		public.add(-1, -1, false);
	};

	private.construct();
	return public;

}