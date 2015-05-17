var Factory = {};

Factory.loadPawn = function(){
	for(var i = 0; i < 8; i++){
		Factory.buildPawn(i, 1, 0);
		Factory.buildPawn(i, 6, 1);
	}
};

Factory.loadTower = function(){
	Factory.buildTower(0, 0, 0);
	Factory.buildTower(7, 0, 0);
	Factory.buildTower(0, 7, 1);
	Factory.buildTower(7, 7, 1);
};

Factory.loadKinght = function(){
	Factory.buildKnight(1, 0, 0);
	Factory.buildKnight(6, 0, 0);
	Factory.buildKnight(1, 7, 1);
	Factory.buildKnight(6, 7, 1);
};

Factory.loadBishop = function(){
	Factory.buildBishop(2, 0, 0);
	Factory.buildBishop(5, 0, 0);
	Factory.buildBishop(2, 7, 1);
	Factory.buildBishop(5, 7, 1);
};

Factory.loadQueen = function(){
	Factory.buildQueen(3, 0, 0);
	Factory.buildQueen(3, 7, 1);
};

Factory.loadKing = function(){
	Factory.buildKing(4, 0, 0);
	Factory.buildKing(4, 7, 1);
};

Factory.addPieceOnSquare = function(piece, x, y){
	var square = Chess.board.getSquare({'x' : x, 'y' : y});
	square.setPiece(piece);
};

Factory.buildKing = function(x, y, player){
	Factory.addPieceOnSquare(new King(player), x, y);
};

Factory.buildQueen = function(x, y, player){
	Factory.addPieceOnSquare(new Queen(player), x, y);
};

Factory.buildBishop = function(x, y, player){
	Factory.addPieceOnSquare(new Bishop(player), x, y);
};

Factory.buildKnight = function(x, y, player){
	Factory.addPieceOnSquare(new Knight(player), x, y);
};

Factory.buildTower = function(x, y, player){
	Factory.addPieceOnSquare(new Tower(player), x, y);
};

Factory.buildPawn = function(x, y, player){
	Factory.addPieceOnSquare(new Pawn(player), x, y);
};

