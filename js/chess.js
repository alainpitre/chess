function Chess(){

	var public = {};
	var private = {};

	public.board = undefined;
	public.select = undefined;
	public.player = undefined;
	public.playerList = [];

	public.main = function(){
		window.addEventListener('load', private.documentReady, false )
	}

	private.documentReady = function(){
		public.board = new Board();
		private.loadPlayer();
		private.loadChess();
	};

	private.loadPlayer = function(){
		public.playerList[0] = new Player(0);
		public.playerList[1] = new Player(1);
	};

	private.loadChess = function(){
		Factory.loadPawn();
		Factory.loadTower();
		Factory.loadKinght();
		Factory.loadBishop();
		Factory.loadQueen();
		Factory.loadKing();
	};

	public.getEnemy = function() {
		return public.playerList[(public.player.number != 1) ? 0 : 1];
	};

	public.updatePlayer = function(){
		public.player = public.playerList[(public.player.number == 1) ? 0 : 1];
	};

	public.setPlayer = function(number){
		public.player = public.playerList[number];
		public.board.removeStart();
		console.log(public.player.getColor()+' is starting');
	};

	public.main();
	return public;

}