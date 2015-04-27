function Square(x, y){

	var public = {};
	var private = {};

	public.x = 0;
	public.y = 0;
	public.className = "";
	public.p_id = undefined;

	private.construct = function(){
		private.definePosition(x, y);
		private.setClassName(x, y);
		private.setJquery();
		private.bindEvents();
	};

	private.definePosition = function(x, y){
		public.x = x;
		public.y = y;
	};

	public.hasPiece = function(){
		return public.p_id != undefined;
	};

	public.setPiece = function(p_id){
		public.p_id = p_id;
		private.addPieceOnSquare();
	};

	private.addPieceOnSquare = function(){
		var piece = Chess.pieces[public.p_id];
		public.html(piece.getJquery());
	};

	public.getPiece = function(){
		var pieceId = public.children().data('id');
		return Chess.pieces[pieceId];
	};

	public.getPosition = function(){
		return { x : public.x, y : public.y };
	};

	private.setClassName = function(x, y){
		if((x + (y + 1)) % 2 == 0)
			public.className = 'case-dark';
		else
			public.className = 'case-light';
	};

	private.setJquery = function(){
		var $square = $('<div>');
		$square.addClass(public.className);
		$.extend(public, $square);
	}

	private.bindEvents = function(){
		public.bind('click', function(){
			Chess.events.clickSquare(public);
		});
	};

	private.construct();
	return public;

}