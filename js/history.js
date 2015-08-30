function History(){

	var public = {};
	var private = {};

	private.panel = undefined;
	private.pointer = 0;
	private.list = [];
	private.x = ['a','b','c','d','e','f','g','h'];
	private.y = ['1','2','3','4','5','6','7','8'];

	private.construct = function(){
		private.setPanel();
	};

	private.setPanel = function(){
		public.panel = document.createElement("div");
		public.panel.setAttribute('id', 'history');
		
		Chess.html.appendChild(public.panel);
	};

	public.getList = function(){
		return private.list;
	};

	public.getPointer = function(){
		return private.pointer;
	};

	public.save = function(from, to){
		var data = private.prepare(from, to);

		if(private.list[private.pointer] != undefined)
			private.slice();

		private.list[private.pointer] = data;
		private.pointer++;

		private.print(private.encodeNotation(data));
	};

	private.print = function(notation){
		var step = document.createElement("div");
		step.id = notation;
		step.innerHTML = notation
		public.panel.appendChild(step);
	};
	
	private.slice = function(){
		private.list = private.list.slice(0, private.pointer);
	};

	private.prepare = function(from, to){
		return {
			'piece'		: from.getPiece(),
			'from' 		: from,
			'to'		: to,
			'capture'	: to.getPiece()
		}
	};

	private.encodeNotation = function(move){
		var capture = "";
		var position = move.to.position;

		if(move.capture != undefined)
			capture = "x";

		return move.piece.type.toUpperCase() + capture + private.x[position.x] + private.y[position.y];
	};

	public.hasNext = function(){
		return private.list[private.pointer] != undefined;
	};

	public.hasPrev = function(){
		return private.list[private.pointer - 1] != undefined;
	};

	public.getMove = function(){
		return private.list[private.pointer];
	};

	public.getNext = function(){
		var move = public.getMove();
		private.pointer++;
		return move;
	};

	public.getPrev = function(){
		private.pointer--;
		return public.getMove();
	};

	public.toString = function(){
		console.log(private.list);
	};

	private.construct();
	return public;

}