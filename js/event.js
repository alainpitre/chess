function Event(){

	var event = {};

	event.clickSquare = function(square){
		if(Chess.select != undefined)
			event.moveTo(square);

		else if(square.hasPiece())
			event.setActive(square);

		else
			event.resetActive();
	};

	event.moveTo = function(square){
		if(Chess.select.isEat(square)){
			event.eat(square);
		}
	};

	event.eat = function(square){
		var piece = square.getPiece();
		square.html('');
		Chess.board.eat.append(piece);
		event.resetActive();
	};

	event.setActive = function(square){
		Chess.select = square.getPiece();
	};

	event.resetActive = function(){
		Chess.select = undefined;
	};

	return event;

};