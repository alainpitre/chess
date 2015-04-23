function Piece(type, player){

	var public = {};
	var private = {};

	public.type = "";
	public.player = "";
	public.html = "";

	private.construct = function(){
		public.type = type;
		public.player = player;
	};

	public.piece = function(){
		var $piece = $('<div>');
		$piece.addClass('piece');
		$piece.addClass(public.type);
		$piece.html(public.html);
		$piece.data(public);
		return $piece;
	};

	public.setHtml = function(html){
		public.html = html;
	}

	private.construct();
	return public;

}