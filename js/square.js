function Square(x, y){

	var public = {};
	var private = {};

	public.x = 0;
	public.y = 0;
	public.className = "";

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
		return public.children().length > 0;
	};

	public.setPiece = function(id){
		var piece = Chess.pieces[id];
		piece.position = public.getPosition();
		public.html(piece.gethtml());
	}

	public.isEmpty = function(){
		return public.hasPiece() == false;
	};

	public.hasEnemy = function(){
		var piece = public.getPiece();
		return piece != undefined && piece.player != Chess.player;
	};

	public.isPlayer = function(){
		var piece = public.getPiece();
		return piece != undefined && piece.player == Chess.player;
	};

	public.getPiece = function(){
		if(public.hasPiece())
			return Chess.pieces[public.children().getId()];
		else
			return undefined;
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
		$square.data('position', public.getPosition());
		$.extend(public, $square);
	}

	private.bindEvents = function(){
		public.bind('click', function(){
			event.clickSquare(public);
		});
	};

	private.construct();
	return public;

}