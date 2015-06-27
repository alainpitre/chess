function Moves(piece){

	var public = {};
	var private = {};

	public.qts = 0;
	private.squares = [];
	private.direction = 0;
	private.piece = undefined;

	private.addSquare = function(position){

		var square = Chess.board.getSquare(position);
		var isNotValidMove = square == undefined || square.hasSamePlayer(private.piece.player);
		var hasEnemyPlayer = square != undefined && square.hasEnemyPlayer(private.piece.player);

		if(isNotValidMove){
			return false;
		}

		if(hasEnemyPlayer){
			private.squares.push(square);
			return false;
		}

		if(square.isEmpty() && private.piece.is('pawn') == false){
			private.squares.push(square);
			return true;
		}

	};

	public.construct();
	return public;

}
