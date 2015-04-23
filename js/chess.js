function Chess(){

	var public = {};
	var private = {};

	public.board = undefined;
	public.pieces = undefined;

	public.main = function(){
		$("document").ready(private.documentReady);
	}

	private.documentReady = function(){
		public.board = new Board();
		public.factory = new Factory();
		public.board.print();
		private.loadChess();
	};

	private.loadChess = function(){
		public.factory.loadPawn();
		public.factory.loadTower();
		public.factory.loadKinght();
		public.factory.loadBishop();
		public.factory.loadQueen();
		public.factory.loadKing();
	}

	public.main();
	return public;

}