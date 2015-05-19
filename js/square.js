function Square(x, y){

	var public = {};
	var private = {};

	public.position = {};
	public.className = "";
	public.node = undefined;

	private.construct = function(){
		private.setPosition(x, y);
		private.setClassName(x, y);
		private.setNode();
	};

	private.setPosition = function(x, y){
		public.position.x = x;
		public.position.y = y;
	};

	public.hasPiece = function(){
		return public.node.childNodes.length > 0;
	};

	public.setPiece = function(piece){
		public.empty();
		piece.position = public.position;
		public.node.appendChild(piece.node);
	}

	public.empty = function(){
		if(public.node.firstChild != undefined)
			public.node.removeChild(public.node.firstChild);
	}

	public.desactivate = function(){
		console.log('desactivate');
		public.node.className = public.className;
	}

	public.activate = function(){
		public.node.className += " active";
	}

	public.isEmpty = function(){
		return public.hasPiece() == false;
	};

	public.isEnemy = function(player){
		var piece = public.getPiece();
		return piece != undefined && piece.player.id != player.id;
	};

	public.isEmptyOrEnemy = function(player){
		var piece = public.getPiece();
		return piece == undefined || piece.player.id != player.id;
	};

	public.hasEnemy = function(){
		var piece = public.getPiece();
		return piece != undefined && piece.player.id != Chess.playing.id;
	};

	public.hasKing = function(){
		var piece = public.getPiece();
		return piece != undefined && piece.type == "king";
	};

	public.getPiece = function(){
		if(public.hasPiece())
			return public.node.firstElementChild.object;
		else
			return undefined;
	};

	private.setClassName = function(x, y){
		if((x + (y + 1)) % 2 == 0)
			public.className = 'case-dark';
		else
			public.className = 'case-light';
	};

	private.setNode = function(){
		public.node = document.createElement("div");
		public.node.setAttribute('class', public.className);
		public.node.object = public;
		public.node.addEventListener('click', function(){
			event.clickSquare(public.node.object);
		});
	}

	private.construct();
	return public;

}