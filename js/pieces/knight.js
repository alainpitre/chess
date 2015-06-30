function Knight(player){

	var public = new Piece("knight", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9816;', '&#9822;']);
	};

	public.setMoves = function(){
		public.resetMoves();

		public.add(-2, -1, true);
		public.add(-1, -2, true);
		public.add(2, -1, true);
		public.add(1, -2, true);
		public.add(-2, 1, true);
		public.add(-1, 2, true);
		public.add(2, 1, true);
		public.add(1, 2, true);
	};

	private.construct();
	return public;

}