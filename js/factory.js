var Factory = {};

Factory.loadPawn = function(){
	for(var i = 0; i < Chess.board.col.length; i++){
		var col = Chess.board.col[i];
		Factory.buildPion(col, 2, 0);
		Factory.buildPion(col, 7, 1);
	}
};

Factory.loadTower = function(){
	Factory.buildTower('a', 1, 0);
	Factory.buildTower('h', 1, 0);
	Factory.buildTower('a', 8, 1);
	Factory.buildTower('h', 8, 1);
};

Factory.loadKinght = function(){
	Factory.buildKnight('b', 1, 0);
	Factory.buildKnight('g', 1, 0);
	Factory.buildKnight('b', 8, 1);
	Factory.buildKnight('g', 8, 1);
};

Factory.loadBishop = function(){
	Factory.buildBishop('c', 1, 0);
	Factory.buildBishop('f', 1, 0);
	Factory.buildBishop('c', 8, 1);
	Factory.buildBishop('f', 8, 1);
};

Factory.loadQueen = function(){
	Factory.buildQueen('d', 1, 0);
	Factory.buildQueen('d', 8, 1);
};

Factory.loadKing = function(){
	Factory.buildKing('e', 1, 0);
	Factory.buildKing('e', 8, 1);
};

Factory.addPieceToCase = function($case, piece){

	var index = Chess.pieces.length;
	piece.setIndex(index);
	Chess.pieces.push(piece);
	$case.html(piece.getJquery());

};

Factory.buildKing = function(col, row, player){
	var $case = Chess.board.getCase(row, col);
	Factory.addPieceToCase($case, new King(player));
};

Factory.buildQueen = function(col, row, player){
	var $case = Chess.board.getCase(row, col);
	Factory.addPieceToCase($case, new Queen(player));
};

Factory.buildBishop = function(col, row, player){
	var $case = Chess.board.getCase(row, col);
	Factory.addPieceToCase($case, new Bishop(player));
};

Factory.buildKnight = function(col, row, player){
	var $case = Chess.board.getCase(row, col);
	Factory.addPieceToCase($case, new Knight(player));
};

Factory.buildTower = function(col, row, player){
	var $case = Chess.board.getCase(row, col);
	Factory.addPieceToCase($case, new Tower(player));
};

Factory.buildPion = function(col, row, player){
	var $case = Chess.board.getCase(row, col);
	Factory.addPieceToCase($case, new Pawn(player));
};

