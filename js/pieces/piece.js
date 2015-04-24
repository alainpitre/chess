function Piece(type, player){

	var public = {};
	var private = {};

	private.html = "";
	private.type = "";
	private.player = "";
	private.position = {};
	private.index = 0;

	private.construct = function(){
		private.type = type;
		private.player = player;
	};

	public.setHtml = function(html){
		private.html = html;
	};

	public.setPosition = function(position){
		private.position = position;
	}

	public.getPosition = function(position){
		return private.position;
	}

	public.getType = function(position){
		return private.type;
	}

	public.getPlayer = function(position){
		return private.player;
	}

	public.setIndex = function(index){
		private.index = index;
	}

	public.getMoves = function(){
		console.warn('NO FUNCTION MOVES IMPLEMENTED');
		return [];
	};

	public.getJquery = function(){
		return $('<div>', {
			'class' : 'piece',
			'html'	: private.html,
			'data'	: {
				'index' : private.index
			}
		});
	};

	private.construct();
	return public;

}