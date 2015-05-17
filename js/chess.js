function Chess(){

	var public = {};
	var private = {};

	public.board = undefined;
	public.select = undefined;
	public.player = 1;
	public.color = ['WHITE', 'BLACK'];

	public.main = function(){
		window.addEventListener('load', private.documentReady, false )
	}

	private.documentReady = function(){
		public.board = new Board();
		private.loadChess();
	};

	private.loadChess = function(){
		Factory.loadPawn();
		Factory.loadTower();
		Factory.loadKinght();
		Factory.loadBishop();
		Factory.loadQueen();
		Factory.loadKing();
	}

	public.getPlayerColor = function(){
		return public.color[public.player];
	};

	public.setPlayer = function(player){
		public.player = player;
		public.board.removeStart();
		console.log(public.getPlayerColor()+' is starting');
	};

	public.main();
	return public;

}