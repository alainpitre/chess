function Square(x, y){

	var $square = $('<div>');
	var public = {};
	var private = {};

	public.position = {};
	public.className = "";

	private.construct = function(){
		private.setPosition(x, y);
		private.setClassName(x, y);
		private.setSquare();
	};

	private.setPosition = function(x, y){
		public.position.x = x;
		public.position.y = y;
	};

	public.hasPiece = function(){
		return $square.children().length > 0;
	};

	public.setPiece = function(id){
		var piece = Chess.pieces[id];
		piece.position = public.position;
		$square.html(piece.getElement());
	}

	public.empty = function(){
		$square.html('');
	}

	public.highlight = function(){
		$square.addClass('active');
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
			return Chess.pieces[$square.children().getId()];
		else
			return undefined;
	};

	public.getPosition = function(){
		return public.position;
	};

	private.setClassName = function(x, y){
		if((x + (y + 1)) % 2 == 0)
			public.className = 'case-dark';
		else
			public.className = 'case-light';
	};

	private.setSquare = function(){
		$square.addClass(public.className);
		$square.bind('click', function(){
			event.clickSquare(Chess.board.getSquare(public.getPosition()));
		});
	}

	public.getElement = function(){
		return $square;
	}

	private.bindEvents = function(){
		public.bind('click', function(){
			event.clickSquare(public);
		});
	};

	private.construct();
	return public;

}