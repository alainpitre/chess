var event = {};

event.clickSquare = function(square){
	if(Chess.select != undefined)
		event.move(square);
	else if(square.isPlayer())
		event.setActive(square);
};

event.move = function(square){
	if(square.hasEnemy())
		event.moveEat(square);
	else if(square.isEmpty())
		event.moveTo(square)
	else
		event.setActive(square);
};

event.moveEat = function(to){
	event.moveTo(to);
};

event.moveTo = function(square){
	if(Chess.select.isValidMove(square)){
		Chess.select.getSquare().empty();
		square.setPiece(Chess.select);
		event.resetActive();
	}
};

event.setActive = function(square){
	if(Chess.select != undefined)
		Chess.select.hideMoves();
	Chess.select = square.getPiece();
	Chess.select.showMoves();
};

event.resetActive = function(){
	Chess.select.hideMoves();
	Chess.updatePlayer();
	Chess.showCheck();
	Chess.select = undefined;
};