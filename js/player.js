function Player(color){

	var public = {};
	var private = {};

	public.color = "";
	public.isCheck = false;
	public.enemy = undefined;
	public.pieces = {};
	public.captured = {};

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

	private.loadPieces = function(){
		private.loadPawn();
		private.loadTower();
		private.loadKinght();
		private.loadBishop();
		private.loadQueen();
		private.loadKing();
	};

	public.updateMoves = function(){
		public.enemy.isCheck = false;

		for(var key in public.pieces){

			var piece = public.pieces[key];

			piece.setMoves();

			if(piece.isCaptureKing())
				public.enemy.isCheck = true;

		}
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

		/*

		if(piece.is('R'))
			piece.setCastling(position);

		*/

		public.pieces[piece.id] = piece;
	};

	public.unsetPiece = function(id){
		var tempPieces = {};

		for(var index in public.pieces){
			if(index == id)
				public.captured[index] = public.pieces[index];
			else
				tempPieces[index] = public.pieces[index];
		}

		public.pieces = tempPieces;
	};

	private.construct();
	return public;

}