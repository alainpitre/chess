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
		for(var y = 1; y < 9; y++){
			for(var x = 1; x < 9; x++){
				private.buildSquare(x, y);
			}
		}
	};

	private.buildSquare = function(x, y){
		var square = new Square(x, y);
		if(private.square[x] == undefined)
			private.square[x] = {};
		private.square[x][y] = square;
		public.node.appendChild(square.node);
	};

	public.getSquare = function(position){
		if(public.squareExist(position) == false)
			return undefined;
		return private.square[position.x][position.y];
	};

	public.squareExist = function(position){
		return private.square[position.x] != undefined && private.square[position.x][position.y] != undefined;
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