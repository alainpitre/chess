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
		private.panel = document.createElement("div");
		private.panel.id = 'history';
		
		Chess.html.appendChild(private.panel);
	};

	public.getList = function(){
		return private.list;
	};

	public.getPointer = function(){
		return private.pointer;
	};

	public.save = function(from, to){
		var data = private.prepare(from, to);

		private.print(data);

		if(private.list[private.pointer] != undefined)
			private.slice();

		private.list[private.pointer] = data;
		private.pointer++;
		private.updateListing(private.pointer);
	};

	private.print = function(data){
		var step = document.createElement("div");
		step.innerHTML 	= private.encodeNotation(data);
		private.panel.appendChild(step);
	};

	private.slice = function(){
		private.list = private.list.slice(0, private.pointer);

		var moves= private.panel.childNodes;

		for(var i = private.pointer; i < moves.length; i++){
			private.panel.removeChild(moves[i]);
		}

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

	private.updateListing = function(pointer){
		var lastMove = private.panel.querySelector(".last-move");

		if(lastMove != undefined)
			lastMove.removeAttribute('class');

		var pointerMove = private.panel.childNodes[private.pointer - 1];

		if(pointerMove != undefined)
			pointerMove.className = "last-move";
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
		private.updateListing();
		return move;
	};

	public.getPrev = function(){
		private.pointer--;
		private.updateListing();
		return public.getMove();
	};

	public.toString = function(){
		console.log(private.list);
	};

	private.construct();
	return public;

}