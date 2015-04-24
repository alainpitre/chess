function Case(x, y){

	var $case = $('<div>');

	var public = {};
	var private = {};

	public.x = 0;
	public.y = 0;
	public.className = "";
	public.p_id = undefined;

	private.construct = function(){
		public.x = x;
		public.y = y;
		private.setClassName(x, y);
		private.setJquery();
	};

	public.setPiece = function(p_id){
		public.p_id = p_id;
		var $case = Chess.cases[public.y][public.x];
		var piece = Chess.pieces[p_id];
		$case.html(piece.getJquery());
	}

	public.getPiece = function(){
		return Chess.pieces[public.p_id];
	}

	public.getPosition = function(){
		return { x : public.x, y : public.y };
	};

	private.setClassName = function(x, y){
		if((x + (y + 1)) % 2 == 0)
			public.className = 'case-dark';
		else
			public.className = 'case-light';
	};

	private.setJquery = function(){
		$case.addClass(public.className);
		$case.data(public);
		$case.bind('click', Chess.events.clickCase);
	}

	private.construct();
	return $case;

}