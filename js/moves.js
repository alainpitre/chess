function Moves(player){

	public = {};
	private = {};

	public.targets = {};
	private.position = {};
	public.player = "";
	private.direction = 0;

	public.construct = function(){
		public.player = player;
	};

	public.init = function(position, player){
		private.direction = (player == 1) ? 1 : -1;
		private.position = position;
		public.player = player;
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
	};

	public.setDouble = function(){
		private.add(0, -2, true);
	};

	public.isValid = function(position){
		return public.targets[position.x+","+position.y] != undefined;
	};

	private.addNextSquare = function(position){
		var nextSquare = Chess.board.getSquare(position);
		var piece = nextSquare.getPiece();

		if(piece == undefined){
			public.targets[position.x+","+position.y] = nextSquare;
			return false;
		}

		if(piece != undefined && piece.player != public.player){
			public.targets[position.x+","+position.y] = nextSquare;
			return true;
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
