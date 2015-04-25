function Event(){

	var event = {};

	event.clickCase = function(square){
		if(square.hasPiece())
			event.selectPiece(square);
		else
			event.movePiece(square);
	};

	event.movePiece = function(square){
		var prevPos = Chess.board.position;
		var nextPos = square.getPosition();
		Chess.board.position = {};
		event.emptySquare(prevPos);
		event.moveTo(nextPos);
	};

	event.moveTo = function(position){
		var square = Chess.board.getCase(position.y, position.x);
		square.html(Chess.board.selected.getJquery());
	};

	event.emptySquare = function(position){
		var square = Chess.board.getCase(position.y, position.x);
		square.html('');
	};

	event.selectPiece = function(square){
		Chess.board.selected = square.getPiece();
		Chess.board.position = square.getPosition();

		console.log(Chess.board.selected.getType());
	};

	return event;

};