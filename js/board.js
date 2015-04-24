function Board($container){

	var public = {};
	var private = {};

	public.col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	public.row = ['1', '2', '3', '4', '5', '6', '7', '8'];

	private.board = undefined;

	public.construct = function(){
		private.setBoard();
		private.buildCases();
	};

	private.buildCases = function(){
		for(var i = 0; i < 8; i++){
			Chess.cases[i] = {};
			for(var j = 0; j < 8; j++){
				private.appendCase(i, j);
			}
		}
	};

	private.appendCase = function(x, y){
		var singleCase = new Case(x, y);
		var $case = singleCase.getJquery();
		Chess.cases[i][j] = $case;
		$case.bind('click', function(){
			//private.clickCase($(this));
		});
		private.board.append($case);
	};

	private.setBoard = function($container){
		var $board = $('<div>');
		$board.attr('id', 'board');
		private.board = $board;
		$container.html(private.board);
	};

	public.print = function($container){
		$container.html(private.board);
		for(var i = 0; i < 8; i++){
			for(var j = 0; j < 8; j++){
				private.appendCaseToBoard(i, j);
			}
		}
	};

	private.clickCase = function($case){
		$('.active').removeClass('active');
		if($case.hasPiece()){
			$case.addClass('active');
			var $piece = $case.getPiece();
			private.highlightCases($piece.getMoves());
		}
	};

	private.highlightCases = function(cases){
		for(var i = 0; i < cases.length; i++){
			var position = cases[i];
			var $case = public.getCase(position.row, position.col);
			$case.addClass('active');
		}
	};

	public.getCase = function(row, col){
		return Chess.cases[row][col];
	};

	public.construct();
	return public;

}