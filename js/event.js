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

event.moveTo = function(to){
	Chess.select.getSquare().html('');	
	to.setPiece(Chess.select);
	event.resetActive();
};

event.setActive = function(square){
	Chess.select = square.getPiece();
	//square.addClass('active');
};

event.resetActive = function(){
	$('.active').removeClass('active');
	Chess.select = undefined;
};

event.changeOfPlayer = function(){
	Chess.player = (Chess.player == 1) ? 0 : 1;
}