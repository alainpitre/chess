function Chess(){

	var public = {};
	var private = {};

	public.pieces = [];
	public.cases = {};
	public.board = undefined;
	public.events = undefined;

	public.main = function(){
		$("document").ready(private.documentReady);
	}

	private.documentReady = function(){
		public.events = new Event();
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