var event = {};

event.clickSquare = function(square){
	var piece = square.getPiece();

	if(Validation.isPlayerPiece(piece))
		event.selectPiece(piece);

	else if(Validation.isDestination(square))
		event.move(square);

};

event.move = function(square){
	if(square.hasEnemy())
		event.moveEat(Chess.select.getSquare(), square);
	else
		event.moveTo(Chess.select.getSquare(), square);
};

event.moveEat = function(from, to){
	event.moveTo(from, to);
};

event.moveFromTo = function(from, to){
	from.empty();
	to.setPiece(Chess.select);
	Chess.updatePlayer();
};

event.moveTo = function(from, to){
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