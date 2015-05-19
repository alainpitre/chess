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
		event.moveFromTo(to, from);
	else
		Chess.setNextPlayer();
	Chess.resetSelect();
};

event.selectPiece = function(piece){
	Chess.resetSelect();
	Chess.select = piece;
	Chess.select.showMoves();
};

event.moveBack = function(){

};