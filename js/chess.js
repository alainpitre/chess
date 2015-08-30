function Chess(){

	var public = {};
	var private = {};

	public.board = undefined;
	public.moves = undefined;
	public.select = undefined;
	public.playing = undefined;
	public.white = undefined;
	public.black = undefined;
	public.html = undefined;

	public.main = function(){
		window.addEventListener('load', private.documentReady, false );
	}

	private.documentReady = function(){
		public.html = document.getElementById('chess');
		public.board = new Board();
		public.moves = new Moves();
		
		private.loadPlayer();

		window.addEventListener("keydown", private.keypress, false);
	};

	private.loadPlayer = function(){
		public.white = new Player('white');
		public.black = new Player('black');
		public.white.enemy = public.black;
		public.black.enemy = public.white;
	};

	private.keypress = function(event){
		switch(event.keyCode){
			case 37 :
				Chess.moves.prev();
				break;
			case 39 :
				Chess.moves.next();
				break;
			default:
				return false;
		}
	};

	public.getPiece = function(position){
		var square = Chess.board.getSquare(position);
		return square.getPiece();
	};

	public.update = function(nextPlayer){
		public.white.updateMoves();
		public.black.updateMoves();

		public.showCheck();
		public.resetSelect();
		public.playing = nextPlayer;
	};

	public.start = function(player){
		public.update(player);
		public.board.removeStart();
	};

	public.resetSelect = function(){
		if(public.select != undefined){
			public.select.hideMoves();
			public.select = undefined;
		}
	};

	public.showCheck = function(){
		if(public.white.isCheck)
			alert('Player White is check.');
		if(public.black.isCheck)
			alert('Player Black is check.');
	};

	public.main();
	return public;

}