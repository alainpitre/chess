function Piece(type, player){

	var public = {};
	var private = {};

	public.id = 0;
	public.type = "";
	public.player = "";
	public.position = {};
	public.moves = undefined;
	public.html = "";

	private.construct = function(){
		public.type 	= type;
		public.player 	= player;
		public.id 		= Chess.pieces.length;
		public.moves 	= new Moves(player, type);
	};

	public.setHtml = function(html){
		public.html = html[player];
	};

	public.getSquare = function(){
		return Chess.board.getSquare(public.position);
	};

	public.isValidMove = function(square){
		var position = square.getPosition();
		return public.moves.isValid(position);
	};

	public.setMoves = function(){
		//Redefined in all childrens class
	};

	public.showMoves = function(){
		var squares = public.moves.getSquares()
		for(var key in squares){
			squares[key].addClass('active');
		}
	};

	public.gethtml = function(){
		var $piece = $('<div>')
		$piece.addClass('piece');
		$piece.data('id', public.id);
		$piece.html(public.html);
		return $piece;
	};

	private.construct();
	return public;

}