function Bishop(player){

	var public = new Piece("bishop", player);
	var private = {};

	var x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	var y = ['1', '2', '3', '4', '5', '6', '7', '8'];

	private.construct = function(){
		public.setHtml("Bi");
	};

	public.getMoves = function(){
		var currentPosition = public.getPosition();
		return private.getDiagonal(currentPosition);
	}

	private.getDiagonal = function(position){
		var move = [];
		for(var i = 1; i < 6; i++){
			move.push({
				'col' : x[5 - i],
				'row' : y[7 - i]
			});
		}
		return move;
	};

	private.construct();
	return public.piece();

}