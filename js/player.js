function Player(id){

	var public = {};
	var private = {};

	public.id = 0;
	public.color = ['WHITE', 'BLACK'];
	public.pieces = [];
	public.isCheck = false;
	public.enemy = undefined;

	private.construct = function(){
		public.id = id;
		private.loadPieces();
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
		var hasEnemyCheck = false;
		for(var i = 0; i < public.pieces.length; i++){
			public.pieces[i].setMoves();
			if(public.pieces[i].canEatKing()){
				hasEnemyCheck = true;
			}
		}
		public.enemy.isCheck = hasEnemyCheck;
	};

	public.getColor = function(){
		return public.color[public.id];
	};

	private.loadPawn = function(){
		var row = (public.id == 0) ? 1 : 6;
		for(var i = 0; i < 8; i++){
			private.addPieceOnSquare(new Pawn(public), i);
		}
	};

	private.loadTower = function(){
		var row = (public.id == 0) ? 0 : 7;
		private.addPieceOnSquare(new Tower(public), 0);
		private.addPieceOnSquare(new Tower(public), 7);
	};

	private.loadKinght = function(){
		var row = (public.id == 0) ? 0 : 7;
		private.addPieceOnSquare(new Knight(public), 1);
		private.addPieceOnSquare(new Knight(public), 6);
	};

	private.loadBishop = function(){
		var row = (public.id == 0) ? 0 : 7;
		private.addPieceOnSquare(new Bishop(public), 2);
		private.addPieceOnSquare(new Bishop(public), 5);
	};

	private.loadQueen = function(){
		var row = (public.id == 0) ? 0 : 7;
		private.addPieceOnSquare(new Queen(public), 4);
	};

	private.loadKing = function(){
		var row = (public.id == 0) ? 0 : 7;
		private.addPieceOnSquare(new King(public), 3);
	};

	private.addPieceOnSquare = function(piece, x){
		var y = piece.getStartingRow();
		var square = Chess.board.getSquare({'x' : x, 'y' : y});
		square.setPiece(piece);
		public.pieces.push(piece);
	};

	private.construct();
	return public;

}