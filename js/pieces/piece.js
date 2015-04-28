function Piece(type, player){

	var public = {};
	var private = {};

	public.id = 0;
	public.type = "";
	public.player = "";

	private.construct = function(){
		public.type = type;
		public.player = player;
		public.id = Chess.pieces.length;
		private.setJquery();
	};

	public.setHtml = function(html){
		public.html(html[player]);
	};

	public.getPosition = function(){
		return public.parent().data('position');
	};

	public.isEat = function(square){
		var piece = square.getPiece();
		return piece != undefined && piece.player != public.player;
	};

	public.getMoves = function(){
		console.warn(private.type+': NO MOVES IMPLEMENTED');
		return [];
	};

	public.toString = function(){
		console.log("piece: ", public.type);
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