function Board($container){

	var public = {};
	var private = {};

	public.eat = undefined;
	public.html = undefined;

	private.square = [];

	public.construct = function(){
		private.setHtml();
		private.loadPlayer();
		private.loadSquares();
	};

	private.setHtml = function(){
		public.html = document.createElement("div");
		public.html.setAttribute('id', 'board');
		document.getElementById('chess').appendChild(public.html);
	};

	private.loadSquares = function(){
		for(var y = 0; y < 8; y++){
			for(var x = 0; x < 8; x++){
				private.buildSquare(x, y);
			}
		}
	};

	private.buildSquare = function(x, y){
		var square = new Square(x, y);
		if(private.square[x] == undefined)
			private.square[x] = {};
		private.square[x][y] = square;
		public.html.appendChild(square.html);
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
		public.html.removeChild(document.getElementById("player"));
	}

	private.loadPlayer = function(){
		var white = '<button onclick="Chess.setPlayer(0);">WHITE</button>';
		var black = '<button onclick="Chess.setPlayer(1);">BLACK</button>';
		public.html.innerHTML += '<div id="player"><div class="button">SELECT STARTING PLAYER<br />'+black+white+'</div></div>';
	};

	public.construct();
	return public;

}