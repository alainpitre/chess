function Board($container){

	var public = {};
	var private = {};

	public.node = undefined;
	private.square = [];

	public.construct = function(){
		private.setNode();
		private.loadSquares();
	};

	private.setNode = function(){
		public.node = document.createElement("div");
		public.node.setAttribute('id', 'board');
		
		Chess.html.appendChild(public.node);
	};

	private.loadSquares = function(){
		for(var y = 0; y < 8; y++){
			for(var x = 0; x < 8; x++){
				private.buildSquare(x, y);
			}
		}
	};

	private.buildSquare = function(x, y){
		if(private.square[x] == undefined)
			private.square[x] = {};

		private.square[x][y] = new Square(x, y);
		public.node.appendChild(private.square[x][y].node);
	};

	public.getSquare = function(position){
		if(private.square[position.x] == undefined || private.square[position.x][position.y] == undefined)
			return undefined;
		return private.square[position.x][position.y];
	};

	public.hidePlayerSelect = function() {
		public.node.removeChild(document.getElementById("player"));
	}

	public.showPlayerSelect = function(){
		var white = '<button onclick="Chess.start(Chess.white);">WHITE</button>';
		var black = '<button onclick="Chess.start(Chess.black);">BLACK</button>';
		public.node.innerHTML += '<div id="player"><div class="button">SELECT STARTING PLAYER<br />'+black+white+'</div></div>';
	};

	public.construct();
	return public;

}