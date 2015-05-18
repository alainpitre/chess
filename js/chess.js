function Chess(){

	var public = {};
	var private = {};

	public.board = undefined;
	public.select = undefined;
	public.playing = undefined;
	public.white = undefined;
	public.black = undefined;

	public.main = function(){
		window.addEventListener('load', private.documentReady, false )
	}

	private.documentReady = function(){
		public.board = new Board();
		private.loadPlayer();
	};

	private.loadPlayer = function(){
		public.white = new Player(0);
		public.black = new Player(1);
		public.white.enemy = public.black;
		public.black.enemy = public.white;
	};

	public.getNextPlayerId = function(){
		return (public.playing.id == 1) ? 0 : 1;
	};

	public.updatePlayer = function(id){
		id = (id == undefined) ? public.getNextPlayerId() : id;
		public.playing = (id == 1) ? public.black : public.white;
		public.white.updateMoves();
		public.black.updateMoves();
	};

	public.setPlayer = function(id){
		public.updatePlayer(id);
		public.board.removeStart();
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