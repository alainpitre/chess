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
		var notation = private.prepare(from, to);

		if(private.list[private.pointer] != undefined)
			private.slice();

		private.list[private.pointer] = notation;
		private.pointer++;

		private.print(notation);
	};

	private.print = function(notation){
		var step = document.createElement("div");
		step.innerHTML = notation
		public.panel.appendChild(step);
	};

	private.slice = function(){
		private.list = private.list.slice(0, private.pointer);
	};

	private.prepare = function(from, to){
		var piece = from.getPiece();
		var fromEncode = private.encodePosition(from.position);
		var toEncode = private.encodePosition(to.position);

		return piece.type + fromEncode + "-" + toEncode;
	};

	private.encodePosition = function(position){
		return private.x[position.x]+private.y[position.y];
	};

	private.decode = function(move){
		var data = move.split('-');
		return {
			'piece' : data[0].charAt(0),
			'from' 	: private.decodePosition(data[0].substring(1, 3)),
			'to'	: private.decodePosition(data[1].substring(0, 2))
		};
	};

	private.decodePosition = function(move) {
		return {
			'x' : private.x.indexOf(move.charAt(0)),
			'y' : private.y.indexOf(move.charAt(1))
		}
	};

	public.hasNext = function(){
		return private.list[private.pointer] != undefined;
	};

	public.hasPrev = function(){
		return private.list[private.pointer - 1] != undefined;
	};

	public.getMove = function(){
		return private.decode(private.list[private.pointer]);
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