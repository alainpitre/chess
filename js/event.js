var event = {};

event.clickSquare = function(square){
	if(square.isActive)
		event.move(Chess.select.getSquare(), square);
};

event.clickPiece = function(piece){
	var square = piece.getSquare();
	if(Validation.isPlayerPiece(piece))
		event.selectPiece(piece);
	else if(square.isActive)
		event.eat(piece);
};

event.moveFromTo = function(from, to){
	from.empty();
	to.setPiece(Chess.select);
	Chess.select.hideMoves();
	Chess.updatePlayer();
};

event.move = function(from, to){
	event.moveFromTo(from, to);
	Chess.showCheck();

	if(Chess.playing.isCheck)
		event.moveFromTo(to, from);
	else
		Chess.resetSelect();
};

event.eat = function(piece){
	var from = Chess.select.getSquare();
	var to = piece.getSquare();

	piece.node.remove();
	event.moveFromTo(from, to);

	if(Chess.playing.isCheck)
		event.moveFromTo(to, from);
	else
		Chess.resetSelect();
};

event.selectPiece = function(piece){
	Chess.resetSelect();
	Chess.select = piece;
	Chess.select.showMoves();
};