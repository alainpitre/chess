function Board(){

	var public = {};
	var private = {};

	public.col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	public.row = ['1', '2', '3', '4', '5', '6', '7', '8'];

	private.cases = {};
	private.board = undefined;

	public.construct = function(){
		private.board = private.getBoard();
		private.setRow();
	};

	private.setRow = function(){
		for(var i = 0; i < public.row.length; i++){
			private.cases[public.row[i]] = {};
			for(var j = 0; j < public.col.length; j++){
				private.cases[public.row[i]][public.col[j]] = private.buildCase(i, j);
			}
		}
	};

	private.getBoard = function(){
		var $board = $('<div>');
		$board.attr('id', 'board');
		return $board;
	};

	private.getCaseClass = function(i, j){
		if((i + (j + 1)) % 2 == 0)
			return 'case-dark';
		else
			return 'case-light';
	};

	private.buildCase = function(i, j){
		var $case = $('<div>');

		$case.attr('class', private.getCaseClass(i, j));
		$case.data('row', public.row[i]);
		$case.data('col', public.col[j]);

		$case.bind('click', function(){
			private.clickCase($(this));
		});

		return $case;
	};

	public.print = function($container){
		$("#chess").html(private.board);
		for(var i = 0; i < public.row.length; i++){
			for(var j = 0; j < public.col.length; j++){
				private.board.append(public.getCase(public.row[i], public.col[j]));
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
		return private.cases[row][col];
	};

	public.construct();
	return public;

}