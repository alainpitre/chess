function Board($container){

	var public = {};
	var private = {};

	public.col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	public.row = ['1', '2', '3', '4', '5', '6', '7', '8'];

	public.selected = {};

	private.board = undefined;

	public.construct = function(){
		private.loadBoard($container);
		private.buildCases();
	};

	private.buildCases = function(){
		for(var y = 0; y < 8; y++){
			Chess.cases[y] = {};
			for(var x = 0; x < 8; x++){
				private.addCaseToBoard(x, y);
			}
		}
	};

	private.addCaseToBoard = function(x, y){
		var $case = new Square(x, y);
		Chess.cases[y][x] = $case;
		private.board.append($case);
	};

	private.loadBoard = function($container){
		private.board = private.getJqueryBoard()
		$container.html(private.board);
	};

	private.getJqueryBoard = function(){
		return $('<div>', {
			'id' : 'board'
		});
	};

	public.getCase = function(x, y){
		return Chess.cases[x][y];
	};

	public.construct();
	return public;

}