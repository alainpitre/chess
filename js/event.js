var event = {};

$.fn.getId = function(){
	return $(this).data('id');
};

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
	Chess.board.eat.append(to.getPiece().gethtml());
	event.moveTo(to);	
};

event.moveTo = function(square){
	if(Chess.select.isValidMove(square)){
		Chess.select.getSquare().html('');
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
	console.log('Now player '+Chess.player+' is playing');
	Chess.select = undefined;
};