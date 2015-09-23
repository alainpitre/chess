function Moves(){

	var public = {};
	var private = {};

	private.move = function(from, to){
		var piece = from.getPiece();

		from.empty();
		to.setPiece(piece, false);
		piece.animate(true);
	};

	public.goTo = function(from, to){
		Chess.history.save(from, to);

		private.move(from, to);
 
		var piece = to.getPiece();

		piece.addCount();

		Chess.sync.send(Chess.history.getMove());
		Chess.update(piece.player.enemy);
	};

	public.prev = function(){
		if(Chess.history.hasPrev()){

			var move = Chess.history.getMove();

			private.move(move.to, move.from);
			
			if(move.capture != undefined){
				move.to.setPiece(move.capture, true);
			}

			move.piece.removeCount();
			Chess.update(move.piece.player);

			Chess.history.prev();

		}
	};

	public.next = function(){
		if(Chess.history.hasNext()){

			Chess.history.next();

			var move = Chess.history.getMove();

			private.move(move.from, move.to);

			move.piece.addCount();
			Chess.update(move.piece.player.enemy);

		}
	};

	return public;

}