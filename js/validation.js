var Validation = {};

Validation.isDestination = function(square){
	return Chess.select != undefined && Chess.select.isValidMove(square);
};

Validation.isPlayerPiece = function(piece){
	return piece != undefined && piece.player.id == Chess.playing.id;
}

Validation.isEating = function(piece){
	var square = Chess.board.getSquare(piece.position);
	return square.isActive;
}