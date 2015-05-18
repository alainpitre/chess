function Piece(type, player){

	var public = {};
	var private = {};

	public.type = "";
	public.position = {};
	public.moves = undefined;
	public.node = undefined;
	public.player = undefined

	private.construct = function(){
		public.type 	= type;
		public.player 	= player;
		public.moves 	= new Moves(type);
		public.setNode();
	};

	public.setNode = function(){
		public.node = document.createElement("div");
		public.node.setAttribute('class', 'piece');
		public.node.object = public; //To keep reference
	};

	public.setHtml = function(html){
		public.node.innerHTML = html[player.id];
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