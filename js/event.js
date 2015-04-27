function Event(){

	var event = {};

	event.clickSquare = function(square){

		Chess.active = square;

		console.log(square.getPiece());

		if(Chess.active != undefined)
			event.movePiece();
		else if(square.hasPiece())
			Chess.active = piece;

	};

	event.movePiece = function(){
		var originPosition = Chess.active.getPosition();
		var originSquare = Chess.board.getSquare(originPosition.x, originPosition.y);
		square.html(Chess.active);


		Chess.active.html('');
		Chess.active = undefined;
	};

	event.moveTo = function(position){
		var square = Chess.board.getCase(position.y, position.x);
		square.html(Chess.active.getJquery());
		Chess.active = undefined;
	};

	return event;

};