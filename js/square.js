function Square(x, y){

	var public = {};
	var private = {};

	public.position = {};
	public.className = "";
	public.html = undefined;

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
		return public.html.childNodes.length > 0;
	};

	public.setPiece = function(piece){
		public.empty();
		piece.position = public.position;
		public.html.appendChild(piece.html);
	}

	public.empty = function(){
		if(public.html.firstChild != undefined)
			public.html.removeChild(public.html.firstChild);
	}

	public.desactivate = function(){
		public.html.className = public.className;
	}

	public.activate = function(){
		public.html.className += " active";
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
			return public.html.firstElementChild.object;
		else
			return undefined;
	};

	private.setClassName = function(x, y){
		if((x + (y + 1)) % 2 == 0)
			public.className = 'case-dark';
		else
			public.className = 'case-light';
	};

	private.setSquare = function(){
		public.html = document.createElement("div");
		public.html.setAttribute('class', public.className);
		public.html.addEventListener('click', function(){
			event.clickSquare(Chess.board.getSquare(public.position));
		});
	}

	private.construct();
	return public;

}