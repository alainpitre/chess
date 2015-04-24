function Event(){

	var event = {};

	$.fn.hasPiece = function(){
		return $(this).find('div').length > 0;
	}

	$.fn.getPiece = function(){
		var index = $(this).find('div').data('index');
		return Chess.pieces[index];
	}

	$.fn.setPiece = function(index){
		$(this).data().setPiece(index);
	}

	event.clickCase = function(){
		var square = $(this).data();
		if($(this).hasPiece()){
			event.selectPiece(square);
		}else
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
		var $square = Chess.board.getCase(position.y, position.x);
		$square.html(Chess.board.selected.getJquery());
	};

	event.emptySquare = function(position){
		var $square = Chess.board.getCase(position.y, position.x);
		$square.html('');
	};

	event.selectPiece = function($square){
		Chess.board.selected = $square.getPiece();
		Chess.board.position = $square.getPosition();

		console.log(Chess.board.selected.getType());
	};

	return event;

};