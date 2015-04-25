function Case(x, y){

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

	public.hasPiece = function(){
		return public.find('div').length > 0;
	};

	public.setPiece = function(p_id){
		public.p_id = p_id;
		private.addPieceToCase();
	};

	private.addPieceToCase = function(){
		var piece = Chess.pieces[public.p_id];
		public.html(piece.getJquery());
	};

	public.getPiece = function(){
		return Chess.pieces[public.p_id];
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
		var $case = $('<div>');
		$case.addClass(public.className);
		private.extend($case);
		private.bindEvents();
	}

	private.extend = function($case){
		public = $.extend($case, public);
	};

	private.bindEvents = function(){
		public.bind('click', function(){
			Chess.events.clickCase(public);
		});
	};

	private.construct();
	return public;

}