var event = {};

event.clickSquare = function(square){	
	if(Chess.select != undefined)
		event.move(square);
	else if(square.hasPiece())
		event.setActive(square);
	else
		event.resetActive();

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
	Chess.board.eat.append(to.getPiece());
	event.moveTo(to);	
};

event.moveTo = function(square){
	if(Chess.select.isValidMove(square)){
		Chess.select.getSquare().html('');
		square.setPiece(Chess.select);
		event.resetActive();
	}
};

event.setActive = function(square){
	$('.active').removeClass('active');
	Chess.select = square.getPiece();
	Chess.select.showMoves();
};

event.resetActive = function(){
	$('.active').removeClass('active');
	Chess.select = undefined;
};

event.changeOfPlayer = function(){
	Chess.player = (Chess.player == 1) ? 0 : 1;
}