var event = {};

event.clickSquare = function(square){
	if(square.isActive){
		Chess.select.hideMoves();
		Chess.select.goTo(square);
		Chess.resetSelect();
	}else if(square.hasSamePlayer(Chess.playing)){
		Chess.selectPiece(square.getPiece());
	}
};