function Board($container){

	var public = {};
	var private = {};

	public.node = undefined;
	private.square = [];

	public.construct = function(){
		private.setNode();
		private.loadPlayer();
		private.loadSquares();
	};

	private.setNode = function(){
		public.node = document.createElement("div");
		public.node.setAttribute('id', 'board');
		document.getElementById('chess').appendChild(public.node);
	};

	private.loadSquares = function(){
		for(var y = 0; y < 8; y++){
			for(var x = 0; x < 8; x++){
				private.buildSquare(x, y);
			}
		}
	};

	public.toString = function(){
		console.log('squares: ', private.square);
	};

	private.buildSquare = function(x, y){
		var square = new Square(x, y);
		var position = square.position;

		if(private.square[position.x] == undefined)
			private.square[position.x] = {};

		private.square[position.x][position.y] = square;
		public.node.appendChild(square.node);
	};

	public.getSquare = function(position){
		if(private.square[position.x] == undefined || private.square[position.x][position.y] == undefined)
			return undefined;
		return private.square[position.x][position.y];
	};

	public.removeStart = function() {
		public.node.removeChild(document.getElementById("player"));
	}

	private.loadPlayer = function(){
		var white = '<button onclick="Chess.setPlayer(0);">WHITE</button>';
		var black = '<button onclick="Chess.setPlayer(1);">BLACK</button>';
		public.node.innerHTML += '<div id="player"><div class="button">SELECT STARTING PLAYER<br />'+black+white+'</div></div>';
	};

	public.construct();
	return public;

}