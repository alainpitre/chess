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
			var row = public.row[i];
			private.cases[row] = {};
			private.setColumn(row);
		}
	};

	private.setColumn = function(row){
		for(var i = 0; i < public.col.length; i++){
			var col = public.col[i];
			private.cases[row][col] = {};
			private.cases[row][col] = private.buildCase(row, col);
		}
	};

	private.getBoard = function(){
		var $board = $('<div>');
		$board.attr('id', 'board');
		return $board;
	};

	private.buildCase = function(row, col){
		var $case = $('<div>');

		$case.attr('class', 'case');
		$case.data('row', row);
		$case.data('col', col);

		$case.bind('click', function(){
			private.clickCase($(this));
		});

		return $case;
	};

	public.print = function($container){
		$("#login").html(private.board);
		for(var i = 0; i < public.row.length; i++){
			for(var j = 0; j < public.col.length; j++){
				private.board.append(public.getCase(public.row[i], public.col[j]));
			}
			private.board.append('<br />');
		}
	};

	private.clickCase = function($case){
		if($case.hasPiece()){
			$case.getPiece().toString();
		}
	};

	public.getCase = function(row, col){
		return private.cases[row][col];
	};

	public.construct();
	return public;

}