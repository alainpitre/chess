function Player(id){

	var public = {};
	var private = {};

	public.id = 0;
	public.color = ['WHITE', 'BLACK'];
	public.isCheck = false;
	public.enemy = undefined;
	public.allMoves = [];
	public.king = undefined;
	public.offboard = {};
	public.pieces = {};

	private.construct = function(){
		public.id = id;
		private.loadPieces();
	};

	private.mergeMoves = function(moves){
		public.allMoves = public.allMoves.concat(moves);
	};

	public.isCheckMate = function(){
		return public.king.isCheckMate();
	}

	public.getColor = function(){
		return public.color[public.id];
	};

	private.loadPieces = function(){
		private.loadPawn();
		private.loadTower();
		private.loadKinght();
		private.loadBishop();
		private.loadQueen();
		private.loadKing();
	};

	public.updateMoves = function(){
		var isEnemyCheck = false;
		public.allMoves = [];

		for(var key in public.pieces){

			var piece = public.pieces[key];

			if(piece.isEat == false){

				piece.setMoves();

				if(piece.canEatKing())
					isEnemyCheck = true;

				private.mergeMoves(piece.moves);

			}

		}

		public.enemy.isCheck = isEnemyCheck;
		
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

		piece.setId(Object.keys(public.pieces).length);
		square.addPiece(piece);

		if(piece.is('R'))
			piece.setCastling(position);

		if(piece.is('K'))
			public.king = piece;

		public.pieces[piece.id] = piece;
	};

	public.unsetPiece = function(id){
		public.pieces[id].isEat = true;
	};

	private.construct();
	return public;

}