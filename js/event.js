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
	Chess.select.addCount();
	Chess.updatePlayer();

	if(Chess.playing.isCheck){
		event.cancel(to, from);
		return false;
	}else{
		return true;
	}
};

event.cancel = function(from, to){
	Chess.showCheck();
	Chess.select.removeCount();
	from.empty();
	to.setPiece(Chess.select);
	Chess.updatePlayer();
};

event.move = function(from, to){
	Chess.select.hideMoves();

	if(event.tryMove(from, to)){
		Chess.select.animate();
		Chess.resetSelect();
	}
};

event.selectPiece = function(piece){

	if(Chess.select != undefined){
		Chess.select.hideMoves();
	}

	Chess.select = piece;
	Chess.select.showMoves();

};