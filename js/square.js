function Square(x, y){

	var public = {};
	var private = {};

	public.position = {};
	public.className = "";
	public.node = undefined;
	public.isActive = false;
	public.castling = false;
	private.piece = undefined;

	private.construct = function(){
		private.setPosition(x, y);
		private.setClassName(x, y);
		private.setNode();
	};

	private.setPosition = function(x, y){
		public.position = {'x' : x, 'y' : y};
	};

	public.addPiece = function(piece){
		public.setPiece(piece);
		piece.animate();
	};

	public.setPiece = function(piece){
		if(private.piece != undefined){
			private.piece.remove();
		}

		Chess.board.node.appendChild(piece.node);
		private.piece = piece;
		private.piece.square = public;
	};

	public.getOffset = function() {
		return {left : public.node.offsetLeft, top  : public.node.offsetTop};
	};

	public.hasPiece = function(){
		return private.piece != undefined;
	};

	public.empty = function(){
		private.piece = undefined;
	};

	public.desactivate = function(){
		public.isActive = false;
		public.node.className = public.className;
	};

	public.activate = function(){
		public.isActive = true;
		public.node.className += " active";
	};

	public.isEmpty = function(){
		return public.hasPiece() == false;
	};

	public.hasSamePlayer = function(player){
		return public.hasPiece() && private.piece.player.color == player.color;
	};

	public.hasEnemyPlayer = function(player){
		return public.hasPiece() && private.piece.player.color != player.color
	};

	public.hasPieceStarting = function(){
		return public.hasPiece() && private.piece.isStarting();
	};

	public.hasKing = function(){
		return public.hasPiece() && private.piece.is("K");
	};

	public.getPiece = function(){
		return private.piece;
	};

	private.setClassName = function(x, y){
		if((x + (y + 1)) % 2 == 0)
			public.className = 'case-dark';
		else
			public.className = 'case-light';
	};

	private.setNode = function(){
		public.node = document.createElement("div");
		public.node.setAttribute('class', public.className);
		public.node.addEventListener('click', function(){
			event.clickSquare(public);
		});
	};

	private.construct();
	return public;

}