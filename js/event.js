var event = {};

$.fn.getId = function(){
	return $(this).data('id');
};

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
	Chess.board.eat.append(to.getPiece().getElement());
	event.moveTo(to);	
};

event.moveTo = function(square){
	if(Chess.select.isValidMove(square)){
		Chess.select.getSquare().empty();
		square.setPiece(Chess.select.id);
		event.resetActive();
	}
};

event.setActive = function(square){
	$('.active').removeClass('active');
	Chess.select = square.getPiece();
	Chess.select.setMoves();
	Chess.select.showMoves();
};

event.resetActive = function(){
	$('.active').removeClass('active');
	Chess.player = (Chess.player == 1) ? 0 : 1;
	console.log(Chess.getPlayerColor()+' is playing');
	Chess.select = undefined;
};