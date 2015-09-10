function History(){

	var public = {};
	var private = {};

	private.panel = undefined;
	private.pointer = -1;
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
		private.pointer++;

		if(private.list[private.pointer] != undefined)
			private.slice(private.pointer);

		private.list[private.pointer] = private.prepare(from, to);

		private.print(private.list[private.pointer]);

		private.updateLastMove();
	};

	private.print = function(data){
		var step = document.createElement("div");
		step.innerHTML 	= private.encodeNotation(data);
		private.panel.appendChild(step);
	};

	private.slice = function(index){
		private.list = private.list.slice(0, index);

		var nbMoves = private.panel.childNodes.length - index;

		for(var i = 0; i < nbMoves; i++){
			private.panel.removeChild(private.panel.childNodes[index]);
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
		var type = move.piece.type.toUpperCase();

		if(move.piece.type == "p" && move.piece.count == 0)
			type = "";

		if(move.capture != undefined)
			capture = "x";

		return type + capture + private.x[position.x] + private.y[position.y];
	};

	private.updateLastMove = function(){
		var lastMove = private.panel.querySelector(".last-move");

		if(lastMove != undefined)
			lastMove.removeAttribute('class');

		var pointerMove = private.panel.childNodes[private.pointer];

		if(pointerMove != undefined)
			pointerMove.className = "last-move";
	};

	public.hasNext = function(){
		return private.list[private.pointer + 1] != undefined;
	};

	public.hasPrev = function(){
		return private.pointer > -1;
	};

	public.getMove = function(){
		return private.list[private.pointer];
	};

	public.next = function(){
		private.pointer++;
		private.updateLastMove();
	};

	public.prev = function(){
		private.pointer--;
		private.updateLastMove();
	};

	private.construct();
	return public;

}