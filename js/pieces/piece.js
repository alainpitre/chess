function Piece(type, player){

	var public = {};
	var private = {};

	public.type = "";
	public.moves = [];
	public.node = undefined;
	public.player = undefined;
	public.square = undefined;
	public.count = 0;
	public.id = 0;
	public.isCaptured = false;
	public.direction = 1;

	private.construct = function(){
		public.type = type;
		public.player = player;
		public.direction = (public.player.color == "white") ? -1 : 1;
		public.id = public.player.pieces.length;
		public.setNode();
	};

	public.setHtml = function(html){
		var index = (public.player.color == "black") ? 1 : 0;
		public.node.innerHTML = html[index];
	};

	public.getPosition = function(){
		return Object.create(public.square.position);
	};

	public.is = function(type){
		return public.type == type;
	};

	public.animate = function(doAnimation){
		if(doAnimation)
			$(public.node).animate(public.square.getOffset());
		else
			$(public.node).css(public.square.getOffset());
	};

	public.setMoves = function(){
		//Redefined in all childrens class
	};

	public.removeCount = function(){
		public.count--;
	};

	public.addCount = function(){
		public.count++;
	};

	public.goTo = function(to){
		Chess.moves.goTo(public.square, to);
	};

	public.isStarting = function(){
		return public.count == 0;
	};

	public.showMoves = function(){
		for(var i = 0; i < public.moves.length; i++)
			public.moves[i].activate();
	};

	public.hideMoves = function(){
		for(var i = 0; i < public.moves.length; i++)
			public.moves[i].desactivate();
	};

	public.isNotValidMove = function(square){
		return square == undefined || square.hasSamePlayer(public.player);
	};

	public.resetMoves = function(){
		public.moves = [];
	};

	public.setNode = function(){
		public.node = document.createElement("div");
		public.node.setAttribute('class', 'piece');
		public.node.addEventListener('click', function(){
			if(Chess.history.isLastMove()){
				event.clickSquare(public.square);
			}
		});
	};

	public.remove = function(){
		public.isCaptured = true;
		public.square = undefined;
		public.node.remove();
	};

	public.getStartingRow = function(){
		if(public.is("p"))
			return (public.player.color == "white") ? 6 : 1;
		else
			return (public.player.color == "white") ? 7 : 0;
	};

	public.addMoves = function(square){
		if(public.isNotValidMove(square)){
			return false;
		}

		if(square.hasEnemyPlayer(public.player)){
			public.moves.push(square);
			return false;
		}

		if(square.isEmpty()){
			public.moves.push(square);
			return true;
		}
	};

	public.add = function(x, y, isSingle){

		var position = public.getPosition();
		var next = true;

		while (next == true) {

	    	position.x += x;
	    	position.y += y * public.direction;

	    	var square = Chess.board.getSquare(position);

	    	next = public.addMoves(square);

	    	if(isSingle)
	    		next = false;

		}

	};

	private.construct();
	return public;

}