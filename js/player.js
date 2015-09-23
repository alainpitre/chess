function Player(color){

	var public = {};
	var private = {};

	public.color = "";
	public.isCheck = false;
	public.enemy = undefined;
	public.pieces = [];

	private.construct = function(){
		public.color = color;
		private.loadPieces();
	};

	public.isWhite = function(){
		return public.color == "white";
	}

	public.isBlack = function(){
		return public.color == "black";
	}

	public.updateMoves = function(){
		public.pieces.forEach(function(piece) {
			if(piece.isCaptured == false){
				piece.setMoves();
				public.analyse(piece.moves);
			}
		});
	};

	public.analyse = function(moves){
		moves.forEach(function(move){
			if(move.hasKing()){
				public.enemy.isCheck = true;
			}
		});
	};

	private.loadPieces = function(){
		private.loadPawn();
		private.loadTower();
		private.loadKinght();
		private.loadBishop();
		private.loadQueen();
		private.loadKing();
	};

	private.loadPawn = function(){
		private.addPiece(new Pawn(public), 0);
		private.addPiece(new Pawn(public), 1);
		private.addPiece(new Pawn(public), 2);
		private.addPiece(new Pawn(public), 3);
		private.addPiece(new Pawn(public), 4);
		private.addPiece(new Pawn(public), 5);
		private.addPiece(new Pawn(public), 6);
		private.addPiece(new Pawn(public), 7);
	};

	private.loadTower = function(){
		private.addPiece(new Rook(public), 0);
		private.addPiece(new Rook(public), 7);
	};

	private.loadKinght = function(){
		private.addPiece(new Knight(public), 1);
		private.addPiece(new Knight(public), 6);
	};

	private.loadBishop = function(){
		private.addPiece(new Bishop(public), 2);
		private.addPiece(new Bishop(public), 5);
	};

	private.loadQueen = function(){
		private.addPiece(new Queen(public), 3);
	};

	private.loadKing = function(){
		private.addPiece(new King(public), 4);
	};

	private.addPiece = function(piece, x){
		var position = {'x' : x, 'y' : piece.getStartingRow()};
		var square = Chess.board.getSquare(position);

		square.addPiece(piece);

		public.pieces[piece.id] = piece;
	};

	private.construct();
	return public;

}