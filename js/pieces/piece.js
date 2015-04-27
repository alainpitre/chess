function Piece(type, player){

	var public = {};
	var private = {};

	private.id = 0;
	private.type = "";
	private.player = "";

	private.construct = function(){
		private.type = type;
		private.player = player;
		private.id = Chess.pieces.length;
		private.setJquery();
	};

	public.setHtml = function(html){
		public.html(html[player]);
	};

	public.getPosition = function(){
		return public.parent().data('position');
	};

	public.getType = function(position){
		return private.type;
	};

	public.getPlayer = function(position){
		return private.player;
	};

	public.setIndex = function(index){
		private.index = index;
	};

	public.getMoves = function(){
		console.warn('NO FUNCTION MOVES IMPLEMENTED');
		return [];
	};

	public.toString = function(){
		console.log("piece: ", public.getType());
	};

	private.setJquery = function(){
		var $piece = $('<div>')
		$piece.addClass('piece');
		$piece.data('id', private.id);
		$.extend(public, $piece);
	}

	private.construct();
	return public;

}