var event = {};

event.clickSquare = function(square){
	var piece = square.getPiece();

	if(Validation.isPlayerPiece(piece))
		event.selectPiece(piece);

	else if(Validation.isDestination(square))
		event.move(Chess.select.getSquare(), square);

};

event.moveFromTo = function(from, to){
	from.empty();
	if(to.hasPiece())
		Chess.playing.eat(to.getPiece());
	to.setPiece(Chess.select);
	Chess.updatePlayer();
};

event.move = function(from, to){
	event.moveFromTo(from, to);
	Chess.showCheck();
	if(Chess.playing.isCheck)
		event.moveBack();
	else
		event.finishMove();

	Chess.select.toString();
	Chess.resetSelect();
};

event.moveBack = function(){
	moveFromTo(to, from);
	Chess.select.removeCount();
};

event.finishMove = function(){
	Chess.setNextPlayer();
	Chess.select.addCount();
};

event.selectPiece = function(piece){
	Chess.resetSelect();
	Chess.select = piece;
	Chess.select.showMoves();
};