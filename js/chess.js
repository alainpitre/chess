function Chess(){

	var public = {};
	var private = {};

	public.pieces = [];
	public.cases = {};
	public.board = undefined;
	public.moves = undefined;
	public.select = undefined;
	public.player = 1;

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

	public.main();
	return public;

}