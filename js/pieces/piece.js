function Piece(type, player){

	var public = {};
	var private = {};

	public.type = "";
	public.moves = [];
	public.node = undefined;
	public.player = undefined;
	public.square = undefined;
	public.count = 0;

	private.construct = function(){
		public.type = type;
		public.player = player;
		public.setNode();
	};

	public.setHtml = function(html){
		public.node.innerHTML = html[player.id];
	};

	public.getPosition = function(){
		return {'x' : public.square.position.x, 'y' : public.square.position.y};
	};

	public.is = function(type){
		return public.type == type;
	};

	public.animate = function(square){
		$(public.node).animate(public.square.getOffset());
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

	public.getCount = function(){
		return public.count;
	};

	public.isStarting = function(){
		return public.getCount() == 0;
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
		public.player.enemy.isCheck = false;
		public.moves = [];
	};

	public.canEatKing = function(){
		for(var i = 0; i < public.moves.length; i++){
			if(public.moves[i].hasEnemyPlayer(public.player) && public.moves[i].hasKing())
				return true;
		}
		return false;
	};

	public.setNode = function(){
		public.node = document.createElement("div");
		public.node.setAttribute('class', 'piece');
		public.node.addEventListener('click', function(){
			event.clickSquare(public.square);
		});
	};

	public.remove = function(){
		public.player.removePiece(public);
		public.square = undefined;
		public.node.remove();
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
		var direction = (public.player.id == 1) ? 1 : -1;
		var next = true;

		while (next == true) {

	    	position.x += x;
	    	position.y += y * direction;

	    	next = public.addMoves(Chess.board.getSquare(position));

	    	if(isSingle)
	    		next = false;

		}

	};

	public.toString = function(){
		console.log(public.type, public.getCount());
	};

	private.construct();
	return public;

}