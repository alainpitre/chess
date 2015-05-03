function Moves(position){

	public = {};
	private = {};

	public.targets = {};
	public.position = {};

	public.construct = function(){
		public.position = position;
		public.targets = {};
		public.append(position);
	};

	public.getPosition = function(){
		return {x : public.position.x, y : public.position.y};
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

	public.append = function(position){
		public.targets[position.x+','+position.y] = Chess.board.getSquare(position);
	};

	public.isValid = function(position){
		return public.targets[position.x+","+position.y] != undefined;
	};

	private.add = function(x, y, isSingle){
		var position = public.getPosition();
		var stop = false;
		while (stop == false) {

	    	position.x += x;
	    	position.y += y;

	    	if(Chess.board.squareExist(position))
	    		public.append(position);
	    	else
	    		stop = true;

	    	if(isSingle)
	    		stop = true;

		}
	};

	public.construct();
	return public;

}
