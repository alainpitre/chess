function History(){

	var public = {};
	var private = {};

	private.pointer = 0;
	private.list = [];
	private.x = ['a','b','c','d','e','f','g','h'];
	private.y = ['1','2','3','4','5','6','7','8'];

	private.construct = function(){

	};

	public.length = function(){
		return private.list.length;
	};

	public.prepare = function(piece, from, to){
		var fromEncode = private.encodePosition(from.position);
		var toEncode = private.encodePosition(to.position);
		return piece.type + fromEncode + "-" + toEncode;
	};

	private.encodePosition = function(position){
		return private.x[position.x]+private.y[position.y];
	};

	public.toString = function(){
		console.log(private.list);
	};

	public.getData = function(){

	};

	public.add = function(status){
		private.list[private.pointer] = status;
		private.pointer++;
	};

	private.construct();
	return public;

}