function Chess(){

	var public = {};
	var private = {};

	public.board = undefined;
	public.moves = undefined;
	public.ai = undefined;
	public.select = undefined;
	public.playing = undefined;
	public.white = undefined;
	public.black = undefined;

	public.main = function(){
		window.addEventListener('load', private.documentReady, false )
	}

	private.documentReady = function(){
		public.board = new Board();
		public.moves = new Moves();
		public.ai = new Ai();
		
		private.loadPlayer();
		window.addEventListener("keydown", Chess.moves.undo, false);
	};

	private.loadPlayer = function(){
		public.white = new Player(0);
		public.black = new Player(1);
		public.white.enemy = public.black;
		public.black.enemy = public.white;
	};

	public.getPiece = function(playerId, pieceId){
		var player = (playerId == 1) ? public.black : public.white;
		return player.pieces[pieceId];
	};

	public.getNextPlayerId = function(){
		return (public.playing.id == 1) ? 0 : 1;
	};

	public.updatePlayer = function(id){
		public.white.updateMoves();
		public.black.updateMoves();
	};

	public.setNextPlayer = function(id){
		id = (id == undefined) ? public.getNextPlayerId() : id;
		public.playing = (id == 1) ? public.black : public.white;
	};

	public.setPlayer = function(id){
		public.setNextPlayer(id);
		public.updatePlayer();
		public.board.removeStart();
	};

	public.resetSelect = function(){
		if(public.select != undefined){
			public.setNextPlayer();
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