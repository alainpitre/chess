function Sync(){

	var public = {};
	var private = {};

	public.send = function(move){
		var encode = private.encode(move);
		var json = JSON.stringify(encode);
		
		public.receive(json);
	};

	public.receive = function(json){

		console.log(json);

		var encode = JSON.parse(json);
		var move = private.decode(encode);
	};

	private.encode = function(move){
		return {
			'capture' 	: private.encodePiece(move.capture),
			'from'		: move.from.position,
			'to'		: move.to.position,
			'piece'		: private.encodePiece(move.piece)
		};
	}

	private.decode = function(encode){
		return {
			'capture' 	: private.loadPiece(encode.capture),
			'from'		: Chess.board.getSquare(encode.from),
			'to'		: Chess.board.getSquare(encode.to),
			'piece'		: private.loadPiece(encode.piece)
		}
	};

	private.loadPiece = function(data){
		if(data == "")
			return undefined;

		return Chess[data.color]['pieces'][data.id];
	};

	private.encodePiece = function(piece){
		if(piece == undefined)
			return "";

		return {'id' : piece.id, 'color' : piece.player.color};
	};

	return public;

}