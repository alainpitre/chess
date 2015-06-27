function King(player){

	var public = new Piece("king", player);
	var private = {};

	private.construct = function(){
		public.setHtml(['&#9812;', '&#9818;']);
	};

	private.hasPieceCastling = function(position){
		var square = Chess.board.getSquare(position);
		var tower = square.getPiece();
		return tower != undefined && tower.isStarting() && public.isStarting();
	};

	private.isCastlingShort = function(){
		var isEmptyA = Chess.board.getSquare({x : 1, y : 7}).isEmpty();
		var isEmptyB = Chess.board.getSquare({x : 2, y : 7}).isEmpty();
		return isEmptyA && isEmptyB && private.hasPieceCastling({x : 0, y : 7});
	};

	private.isCastlingLong = function(){
		var isEmptyA = Chess.board.getSquare({x : 4, y : 7}).isEmpty();
		var isEmptyB = Chess.board.getSquare({x : 5, y : 7}).isEmpty();
		var isEmptyC = Chess.board.getSquare({x : 6, y : 7}).isEmpty();
		return isEmptyA && isEmptyB && isEmptyC && private.hasPieceCastling({x : 7, y : 7});
	};

	public.setMoves = function(){
		public.moves.reset();

		console.log(public.moves.qts + ' moves for King player ' + public.player.getColor());

		public.moves.setDiagonal(true);
		public.moves.setLine(true);
	};

	private.construct();
	return public;

}