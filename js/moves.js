function Moves(){

	var public = {};
	var private = {};

	public.history = undefined;
	public.panel = undefined;

	private.construct = function(){
		public.history = new History();
	};

	private.move = function(from, to){
		var piece = from.getPiece();

		from.empty();
		to.setPiece(piece);
		piece.animate();

		Chess.updatePlayer();
	};

	public.goTo = function(from, to){
		public.history.save(from, to);
		private.move(from, to);
	};

	public.prev = function(){
		var move = public.history.getPrev();

		if(move != undefined){
			var from = Chess.board.getSquare(move.to);
			var to = Chess.board.getSquare(move.from);

			private.move(from, to);
		}
	};

	public.next = function(){
		var move = public.history.getNext();

		if(move != undefined){
			var from = Chess.board.getSquare(move.from);
			var to = Chess.board.getSquare(move.to);

			private.move(from, to);
		}
	};

	private.construct();
	return public;

}