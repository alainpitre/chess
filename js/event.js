function Event(){

	var event = {};

	event.clickSquare = function(square){
		if(Chess.active != undefined)
			event.movePiece(square);
		else if(square.hasPiece())
			Chess.active = square;
		else
			Chess.active = undefined;
	};

	event.movePiece = function(square){
		var piece = Chess.active.getPiece();
		square.html(piece);

		piece.getMoves();
		event.resetActive();
	};

	event.resetActive = function(){
		Chess.active.html('');
		Chess.active = undefined;
	};

	return event;

};