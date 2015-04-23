function Pawn(player){

	var public = new Piece("pawn", player);
	var private = {};

	private.construct = function(){
		public.setHtml("Pa");
	};

	public.getMoves = function(){
		var currentPosition = public.getPosition();
		var move = [];
		move.push({
			'col' : currentPosition.col,
			'row' : currentPosition.row - 1
		});
		move.push({
			'col' : currentPosition.col,
			'row' : currentPosition.row - 2
		});
		return move;
	}

	private.construct();
	return public.piece();

}