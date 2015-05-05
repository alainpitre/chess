function Moves(player, type){

	var public = {};
	var private = {};

	public.targets = {};
	private.position = {};
	private.player = "";
	private.direction = 0;
	private.type = "";

	public.construct = function(){
		private.player = player;
		private.type = type;
	};

	public.init = function(position){
		private.direction = (Chess.player == 1) ? 1 : -1;
		private.position = position;
		public.targets = {};
	};

	public.getPosition = function(){
		return {x : private.position.x, y : private.position.y};
	};

	public.getSquares = function(){
		return public.targets;
	};

	public.setDiagonal = function(isSingle){
		private.add(1, 1, isSingle);
		private.add(1, -1, isSingle);
		private.add(-1, -1, isSingle);
		private.add(-1, 1, isSingle);
	};

	public.setLine = function(isSingle){
		private.add(0, 1, isSingle);
		private.add(0, -1, isSingle);
		private.add(1, 0, isSingle);
		private.add(-1, 0, isSingle);
	};

	public.setL = function(){
		private.add(-2, 1, true);
		private.add(-1, 2, true);
		private.add(2, 1, true);
		private.add(1, 2, true);
		private.add(-2, -1, true);
		private.add(-1, -2, true);
		private.add(2, -1, true);
		private.add(1, -2, true);
	};

	public.setSingle = function(){
		private.add(0, -1, true);
		private.add(1, -1, true);
		private.add(-1, -1, true);
	};

	public.setDouble = function(){
		private.add(0, -2, true);
	};

	public.isValid = function(position){
		return public.targets[position.x+","+position.y] != undefined;
	};

	private.isFront = function(square){
		var position = square.getPosition();
		return private.position.x == position.x;
	};

	private.isDiagonal = function(square){
		return private.isFront(square) == false;
	};

	private.isPawn = function(){
		return private.type == "pawn";
	};

	private.addNextSquare = function(position){
		var nextSquare = Chess.board.getSquare(position);

		if(nextSquare.hasEnemy() && private.isPawn() && private.isFront(nextSquare)){
			return true;
		}

		if(nextSquare.hasEnemy() && private.isPawn() && private.isDiagonal(nextSquare)){
			public.targets[position.x+","+position.y] = nextSquare;
			return true;
		}

		if(nextSquare.isEmpty() && private.isPawn() && private.isFront(nextSquare)){
			public.targets[position.x+","+position.y] = nextSquare;
			return false;
		}

		if(nextSquare.hasEnemy()){
			public.targets[position.x+","+position.y] = nextSquare;
			return true;
		}

		if(nextSquare.isEmpty() && private.isPawn() == false){
			public.targets[position.x+","+position.y] = nextSquare;
			return false;
		}

		return true;
	};

	private.add = function(x, y, isSingle){
		var position = public.getPosition();
		var stop = false;

		while (stop == false) {

	    	position.x += x;
	    	position.y += y * private.direction;

	    	if(Chess.board.squareExist(position))
	    		stop = private.addNextSquare(position);
	    	else
	    		stop = true;

	    	if(isSingle)
	    		stop = true;

		}

	};

	public.construct();
	return public;

}
