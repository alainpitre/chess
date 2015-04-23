function Piece(type, player){

	var public = {};
	var private = {};

	private.html = "";
	private.type = "";
	private.player = "";
	private.position = {};

	private.construct = function(){
		private.type = type;
		private.player = player;
	};

	public.setHtml = function(html){
		private.html = html;
	};

	public.setPosition = function(position){
		private.position = position;
	}

	public.getPosition = function(position){
		return private.position;
	}

	public.getType = function(position){
		return private.type;
	}

	public.getPlayer = function(position){
		return private.player;
	}

	public.getMoves = function(){
		console.warn('NO FUNCTION MOVES IMPLEMENTED');
		return [];
	};

	public.piece = function(){
		var $piece = $('<div>');
		$piece.addClass('piece');
		$piece.addClass(public.type);
		$piece.html(private.html);
		$piece.data(public);
		return $piece;
	};

	private.construct();
	return public;

}