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

	public.save = function(from, to){
		if(private.list[private.pointer] != undefined)
			private.list = private.list.slice(0, private.pointer);

		private.list[private.pointer] = private.prepare(from, to);

		var note = document.createElement("div");
		note.innerHTML = private.prepare(from, to);
		public.panel.appendChild(note);

		private.next();
	};

	private.reset = function(index){
		private.list = private.list.slice(0, index);
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

	public.getPrev = function(){
		if(private.hasPrev() == false)
			return undefined;

		private.prev();
		return public.getMove();
	};

	public.getNext = function(){
		var move = public.getMove();
		private.next();
		return move;
	};

	private.hasPrev = function(){
		return private.list[private.pointer - 1] != undefined;
	};

	public.getMove = function(){
		if(private.list[private.pointer] == undefined)
			return undefined;
		
		return private.decode(private.list[private.pointer]);
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

	private.prev = function(){
		private.pointer--;
	};

	private.next = function(){
		private.pointer++;
	};

	public.toString = function(){
		console.log(private.list);
	};

	private.construct();
	return public;

}