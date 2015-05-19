var Validation = {};

Validation.isDestination = function(square){
	return Chess.select != undefined && Chess.select.isValidMove(square);
};

Validation.isPlayerPiece = function(piece){
	return piece != undefined && piece.player.id == Chess.playing.id;
}