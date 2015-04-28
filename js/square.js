function Square(x, y){

	var public = {};
	var private = {};

	public.x = 0;
	public.y = 0;
	public.className = "";

	private.construct = function(){
		private.definePosition(x, y);
		private.setClassName(x, y);
		private.setJquery();
		private.bindEvents();
	};

	private.definePosition = function(x, y){
		public.x = x;
		public.y = y;
	};

	public.hasPiece = function(){
		return public.children().length > 0;
	};

	public.getPiece = function(){
		if(public.hasPiece())
			return Chess.pieces[public.children().data('id')];
		else
			return undefined;
	};

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
		var $square = $('<div>');
		$square.addClass(public.className);
		$.extend(public, $square);
	}

	private.bindEvents = function(){
		public.bind('click', function(){
			Chess.events.clickSquare(public);
		});
	};

	private.construct();
	return public;

}