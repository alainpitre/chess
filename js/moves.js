function Moves(){

	var public = {};
	var private = {};

	public.history = undefined;

	private.construct = function(){
		public.history = new History();
	};

	public.goTo = function(piece, to){

		var from = piece.square;
		var status = public.history.prepare(piece, from, to);

		from.empty();
		to.setPiece(piece);
		piece.animate();
		
		piece.addCount();

		public.history.add(status);
		public.history.toString();

		Chess.updatePlayer();

	};

	public.undo = function(){

		if(private.history.length > 0){

			var nbUndos = 1;
			var nbMoves = public.history.length - 1;

			for(var i = nbMoves; i > nbMoves - nbUndos; i--){
				/*
				if(private.history[i].castling == true){
					nbUndos++;
				}
				*/
				private.cancelMove();			
			}

			private.history.splice(private.history.length - nbUndos, nbUndos);
		}

		Chess.updatePlayer();

	};

	private.cancelMove = function(move){
		var piece = Chess.getPiece(move.player, move.piece);		
		var from = Chess.board.getSquare(move.from);
		var to = Chess.board.getSquare(move.to);

		Chess.setNextPlayer(move.player);

		to.empty();
		from.setPiece(piece);
		piece.animate();

		piece.removeCount();

		if(move.eat != undefined)
			private.cancelEat(move.eat);
	};

	private.cancelEat = function(move){
		var piece = Chess.getPiece(move.player, move.piece);		
		var from = Chess.board.getSquare(move.from);

		piece.isEat = false;

		from.setPiece(piece);
	};

	private.construct();
	return public;

}