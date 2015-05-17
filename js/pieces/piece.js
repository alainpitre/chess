function Piece(type, player){

	var public = {};
	var private = {};

	public.type = "";
	public.player = "";
	public.position = {};
	public.moves = undefined;
	public.html = undefined;

	private.construct = function(){
		public.type 	= type;
		public.player 	= player;
		public.moves 	= new Moves(type);
	};

	public.setHtml = function(html){
		public.html = document.createElement("div");
		public.html.setAttribute('class', 'piece');
		public.html.object = public; //To keep reference
		public.html.innerHTML = html[player];
	};

	public.getSquare = function(){
		return Chess.board.getSquare(public.position);
	};

	public.isValidMove = function(square){
		return public.moves.isValid(square.position);
	};

	public.setMoves = function(){
		//Redefined in all childrens class
	};

	public.showMoves = function(){
		var squares = public.moves.getSquares()
		for(var key in squares){
			squares[key].activate();
		}
	};

	public.hideMoves = function(){
		var squares = public.moves.getSquares()
		for(var key in squares){
			squares[key].desactivate();
		}
	};

	private.construct();
	return public;

}