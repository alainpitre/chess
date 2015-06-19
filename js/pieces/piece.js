function Piece(type, player){

	var public = {};
	var private = {};

	public.type = "";
	public.moves = undefined;
	public.node = undefined;
	public.player = undefined;
	public.square = undefined;

	private.construct = function(){
		public.type = type;
		public.player = player;
		public.moves = new Moves(public);
		public.setNode();
	};

	public.setNode = function(){
		public.node = document.createElement("div");
		public.node.setAttribute('class', 'piece');
		public.node.addEventListener('click', function(){
			event.clickSquare(public.square);
		});
	};

	public.setHtml = function(html){
		public.node.innerHTML = html[player.id];
	};

	public.getPosition = function(){
		return {'x' : public.square.position.x, 'y' : public.square.position.y};
	};

	public.remove = function(){
		public.node.remove();
	};

	public.animate = function(destination){
		$(public.node).animate(destination); 
	};

	public.setMoves = function(){
		//Redefined in all childrens class
	};

	public.removeCount = function(){
		public.moves.qts--;
	};

	public.addCount = function(){
		public.moves.qts++;
	};

	public.getCount = function(){
		return public.moves.qts;
	};

	public.isStarting = function(){
		return public.getCount() == 0;
	};

	public.canEatKing = function(){
		var squares = public.moves.getSquares();
		for(var key in squares){
			if(squares[key].hasEnemyPlayer(public.player) && squares[key].hasKing())
				return true;
		}
		return false;
	};

	public.showMoves = function(){
		var squares = public.moves.getSquares();
		for(var key in squares){
			squares[key].activate();
		}
	};

	public.hideMoves = function(){
		var squares = public.moves.getSquares();
		for(var key in squares){
			squares[key].desactivate();
		}
	};

	public.toString = function(){
		console.log(public.type, public.getCount());
	};

	private.construct();
	return public;

}