function Piece(type, player){

	var public = {};
	var private = {};

	public.id = 0;
	public.type = "";
	public.player = "";
	public.position = {};
	public.moves = undefined;

	private.construct = function(){
		public.type = type;
		public.player = player;
		public.id = Chess.pieces.length;
		private.setJquery();
	};

	public.setup = function(position){
		public.position = position;
		public.moves = new Moves(position);
		public.setMoves();
	};

	public.setHtml = function(html){
		public.html(html[player]);
	};

	public.getSquare = function(){
		return Chess.board.getSquare(public.position);
	};

	public.isValidMove = function(square){
		var position = square.getPosition();
		console.log(public.moves.isValid(position));
		return public.moves.targets[position.x+","+position.y] != undefined;
	};

	public.setMoves = function(){
		//Redefined in all childrens class
	};

	public.showMoves = function(){
		var moves = public.moves.targets;
		for(var square in moves){
			moves[square].addClass('active');
		}
	};

	private.setJquery = function(){
		var $piece = $('<div>')
		$piece.addClass('piece');
		$piece.data('id', public.id);
		$.extend(public, $piece);
	};

	private.construct();
	return public;

}