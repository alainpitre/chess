function Moves(){

	var public = {};
	var private = {};

	private.history = [];

	public.goTo = function(piece, to){

		var from = piece.square;
		var status = private.prepStatus(piece, from, to);

		if(to.hasEnemyPlayer(piece.player))
			status.eat = private.prepStatus(to.getPiece(), to);

		if(to.castling)
			status.castling = true;

		from.empty();
		to.setPiece(piece);
		piece.animate();
		piece.addCount();

		private.history.push(status);

		Chess.updatePlayer();

	};

	private.prepStatus = function(piece, from, to){
		return {
			'piece'		: piece.id,
			'player' 	: piece.player.id,
			'from' 		: (from != undefined) ? from.position : undefined,
			'to' 		: (to != undefined) ? to.position : undefined,
			'eat'		: undefined,
			'castling'	: false
		}
	};

	public.undo = function(){

		if(private.history.length > 0){

			var nbUndos = 1;
			var nbMoves = private.history.length - 1;

			for(var i = nbMoves; i > nbMoves - nbUndos; i--){
				if(private.history[i].castling == true){
					nbUndos++;
				}
				private.cancelMove(private.history[i]);			
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

	return public;

}