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
	};

	public.goTo = function(from, to){
		public.history.save(from, to);
		private.move(from, to);

		var piece = to.getPiece();

		piece.addCount();
		Chess.update(piece.player.enemy);
	};

	public.prev = function(){
		if(public.history.hasPrev()){
			var move = public.history.getPrev();
			private.move(move.to, move.from);
			
			if(move.capture != undefined)
				move.to.setPiece(move.capture);

			move.piece.removeCount();
			Chess.update(move.piece.player);
		}
	};

	public.next = function(){
		if(public.history.hasNext()){
			var move = public.history.getNext();
			private.move(move.from, move.to);

			move.piece.addCount();
			Chess.update(move.piece.player.enemy);
		}
	};

	private.construct();
	return public;

}