function Chess(){

	var public = {};
	var private = {};

	public.pieces = [];
	public.board = undefined;
	public.moves = undefined;
	public.select = undefined;
	public.player = 1;
	public.color = ['WHITE', 'BLACK'];

	public.main = function(){
		$("document").ready(private.documentReady);
	}

	private.documentReady = function(){
		public.board = new Board($("#chess"));
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

	public.loadPlayer = function(player){
		public.player = player;
		$('#player').remove();
		console.log(public.getPlayerColor()+' is starting');
	};

	public.main();
	return public;

}