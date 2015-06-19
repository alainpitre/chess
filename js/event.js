var event = {};

event.clickSquare = function(square){
	var piece = square.getPiece();

	if(square.isActive)
		event.move(Chess.select.square, square);

	else if(square.hasSamePlayer(Chess.playing))
		event.selectPiece(piece);
};

event.tryMove = function(from, to){
	from.empty();
	to.setPiece(Chess.select);
	Chess.updatePlayer();

	if(Chess.playing.isCheck)
		return event.cancel(to, from);

	return true;
};

event.cancel = function(from, to){
	Chess.showCheck();
	from.empty();
	to.setPiece(Chess.select);
	Chess.updatePlayer();
	return false;
};

event.move = function(from, to){
	Chess.select.hideMoves();

	if(event.tryMove(from, to)){
		event.goTo(to)
	}
};

event.goTo = function(square){
	var offset = square.getOffset();
	Chess.select.animate(offset);
	Chess.resetSelect();
};

event.selectPiece = function(piece){

	if(Chess.select != undefined){
		Chess.select.hideMoves();
	}

	Chess.select = piece;
	Chess.select.showMoves();

};