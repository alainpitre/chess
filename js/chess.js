function Chess(){

	var public = {};
	var private = {};

	public.board = undefined;
	public.moves = undefined;
	public.history = undefined;
	public.select = undefined;
	public.sync = undefined;
	public.playing = undefined;
	public.white = undefined;
	public.black = undefined;
	public.html = undefined;

	public.main = function(){
		public.html = document.getElementById('chess');

		public.board = new Board();
		public.history = new History();
		public.moves = new Moves();
		public.sync = new Sync();
		
		private.loadPlayer();

		window.addEventListener("keydown", private.keypress, false);

		//public.start(public.white);

		public.board.showPlayerSelect();

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

	public.update = function(nextPlayer){
		public.white.isCheck = false;
		public.black.isCheck = false;

		public.white.updateMoves();
		public.black.updateMoves();

		public.showCheck();
		public.resetSelect();

		public.playing = nextPlayer;
	};

	public.start = function(player){
		public.update(player);
		public.board.hidePlayerSelect();
	};

	public.resetSelect = function(){
		if(public.select != undefined){
			public.select.hideMoves();
			public.select = undefined;
		}
	};

	public.selectPiece = function(piece){
		if(public.select != undefined)
			public.select.hideMoves();

		public.select = piece;
		public.select.showMoves();
	};

	public.showCheck = function(){
		if(public.white.isCheck)
			alert('Player White is check.');
		if(public.black.isCheck)
			alert('Player Black is check.');
	};

	window.addEventListener('load', public.main, false);
	return public;

}