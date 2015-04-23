function Factory(){

	var public = {};
	var private = {};

	public.loadPawn = function(){
		for(var i = 0; i < Chess.board.col.length; i++){
			var col = Chess.board.col[i];
			private.buildPion(col, 2, 0);
			private.buildPion(col, 7, 1);
		}
	};

	public.loadTower = function(){
		private.buildTower('a', 1, 0);
		private.buildTower('h', 1, 0);
		private.buildTower('a', 8, 1);
		private.buildTower('h', 8, 1);
	};

	public.loadKinght = function(){
		private.buildKnight('b', 1, 0);
		private.buildKnight('g', 1, 0);
		private.buildKnight('b', 8, 1);
		private.buildKnight('g', 8, 1);
	};

	public.loadBishop = function(){
		private.buildBishop('c', 1, 0);
		private.buildBishop('f', 1, 0);
		private.buildBishop('c', 8, 1);
		private.buildBishop('f', 8, 1);
	};

	public.loadQueen = function(){
		private.buildQueen('d', 1, 0);
		private.buildQueen('d', 8, 1);
	};

	public.loadKing = function(){
		private.buildKing('e', 1, 0);
		private.buildKing('e', 8, 1);
	};

	private.addPieceToCase = function($case, $piece){
		$case.html($piece);
		$piece.setPosition();
	};

	private.buildKing = function(col, row, player){
		var $case = Chess.board.getCase(row, col);
		private.addPieceToCase($case, new King(player));
	};

	private.buildQueen = function(col, row, player){
		var $case = Chess.board.getCase(row, col);
		private.addPieceToCase($case, new Queen(player));
	};

	private.buildBishop = function(col, row, player){
		var $case = Chess.board.getCase(row, col);
		private.addPieceToCase($case, new Bishop(player));
	};

	private.buildKnight = function(col, row, player){
		var $case = Chess.board.getCase(row, col);
		private.addPieceToCase($case, new Knight(player));
	};

	private.buildTower = function(col, row, player){
		var $case = Chess.board.getCase(row, col);
		private.addPieceToCase($case, new Tower(player));
	};

	private.buildPion = function(col, row, player){
		var $case = Chess.board.getCase(row, col);
		private.addPieceToCase($case, new Pawn(player));
	};

	return public;

}