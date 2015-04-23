$.fn.getRow = function(){
	return $(this).parent().data('row');
}

$.fn.getCol = function(){
	return $(this).parent().data('col');
}

$.fn.getPiece = function(){
	return $(this).find('.piece');
};

$.fn.hasPiece = function(){
	return $(this).find('.piece').length > 0;
}

$.fn.getType = function(){
	return $(this).data('type');
}

$.fn.getPlayer = function(){
	return $(this).data('player');
}

$.fn.toString = function(){
	console.log('['+$(this).getCol()+','+$(this).getRow()+'] '+$(this).getType()+', player'+$(this).getPlayer());
}