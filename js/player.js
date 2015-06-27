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
		//private.loadPawn();
		private.loadTower();
		//private.loadKinght();
		//private.loadBishop();
		//private.loadQueen();
		private.loadKing();
	};

	public.updateMoves = function(){
		var isEnemyCheck = false;
		for(var i = 0; i < public.pieces.length; i++){
			public.pieces[i].setMoves();
			if(public.pieces[i].canEatKing()){
				isEnemyCheck = true;
			}
		}
		public.enemy.isCheck = isEnemyCheck;
	};

	public.getColor = function(){
		return public.color[public.id];
	};

	private.loadPawn = function(){
		for(var i = 0; i < 8; i++){
			private.addPiece(new Pawn(public), i);
		}
	};

	private.loadTower = function(){
		private.addPiece(new Tower(public), 0);
		private.addPiece(new Tower(public), 7);
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
		private.addPiece(new Queen(public), 4);
	};

	private.loadKing = function(){
		private.addPiece(new King(public), 3);
	};

	private.addPiece = function(piece, x){
		var y = private.getStartingRow(piece.type);
		var square = Chess.board.getSquare({'x' : x, 'y' : y});
		square.addPiece(piece);
		public.pieces.push(piece);
	};

	public.removePiece = function(piece){
		public.pieces.splice(public.pieces.indexOf(piece), 1);
	};

	private.getStartingRow = function(type){
		if(type == "pawn")
			return (public.id == 0) ? 1 : 6;
		else
			return (public.id == 0) ? 0 : 7;
	};

	private.construct();
	return public;

}