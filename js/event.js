var event = {};

event.clickSquare = function(square){
	var piece = square.getPiece();

	if(square.isActive)
		event.move(square);

	else if(square.hasSamePlayer(Chess.playing))
		event.selectPiece(piece);
};

event.castling = function(square){
	var from = Chess.board.getSquare(square.castling);
	var tower = from.getPiece();
	var to = Chess.board.getSquare(tower.castling);

	Chess.moves.goTo(tower, to);
};

event.move = function(square){
	Chess.select.hideMoves();

	if(square.castling)
		event.castling(square)

	Chess.select.goTo(square);

	if(Chess.playing.isCheck){
		Chess.showCheck();
		Chess.moves.undo();
	}else{
		Chess.resetSelect();
	}
};

event.selectPiece = function(piece){
	if(Chess.select != undefined)
		Chess.select.hideMoves();

	Chess.select = piece;
	Chess.select.showMoves();

};