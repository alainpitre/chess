function Player(number){

	var public = {};
	var private = {};

	public.number = 0;
	public.color = ['WHITE', 'BLACK'];
	public.pieces = [];

	private.construct = function(){
		public.number = number;
	};

	public.getColor = function(){
		return public.color[public.number];
	}

	private.construct();
	return public;

}