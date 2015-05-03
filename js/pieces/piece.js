function Piece(type, player){

	var public = {};
	var private = {};

	public.id = 0;
	public.type = "";
	public.player = "";
	public.position = {};

	private.construct = function(){
		public.type = type;
		public.player = player;
		public.id = Chess.pieces.length;
		private.setJquery();
	};

	public.setHtml = function(html){
		public.html(html[player]);
	};

	public.getSquare = function(){
		return Chess.board.getSquare(public.position);
	};

	public.getMoves = function(){
		console.warn(private.type+': NO MOVES IMPLEMENTED');
		return [];
	};

	private.setJquery = function(){
		var $piece = $('<div>')
		$piece.addClass('piece');
		$piece.data('id', public.id);
		$.extend(public, $piece);
	}

	private.construct();
	return public;

}