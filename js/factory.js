var Factory = {};

Factory.loadPawn = function(){
	for(var i = 0; i < 8; i++){
		Factory.buildPion(i, 1, 0);
		Factory.buildPion(i, 6, 1);
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

Factory.addPieceOnSquare = function(square, piece){
	Chess.pieces.push(piece);
	square.html(piece);
};

Factory.buildKing = function(x, y, player){
	var square = Chess.board.getSquare(y, x);
	Factory.addPieceOnSquare(square, new King(player));
};

Factory.buildQueen = function(x, y, player){
	var square = Chess.board.getSquare(y, x);
	Factory.addPieceOnSquare(square, new Queen(player));
};

Factory.buildBishop = function(x, y, player){
	var square = Chess.board.getSquare(y, x);
	Factory.addPieceOnSquare(square, new Bishop(player));
};

Factory.buildKnight = function(x, y, player){
	var square = Chess.board.getSquare(y, x);
	Factory.addPieceOnSquare(square, new Knight(player));
};

Factory.buildTower = function(x, y, player){
	var square = Chess.board.getSquare(y, x);
	Factory.addPieceOnSquare(square, new Tower(player));
};

Factory.buildPion = function(x, y, player){
	var square = Chess.board.getSquare(y, x);
	Factory.addPieceOnSquare(square, new Pawn(player));
};

