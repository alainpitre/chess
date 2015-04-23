$.fn.getPosition = function(){
	return $(this).data().getPosition();
}

$.fn.setPosition = function(){
	$(this).data().setPosition({
		'col' : $(this).parent().data('col'),
		'row' : $(this).parent().data('row')
	});
}

$.fn.getPiece = function(){
	return $(this).find('.piece');
};

$.fn.getMoves = function(){
	return $(this).data().getMoves();
};

$.fn.getType = function(){
	return $(this).data().getType();
}

$.fn.getPlayer = function(){
	return $(this).data().getPlayer();
}

$.fn.hasPiece = function(){
	return $(this).find('.piece').length > 0;
}

$.fn.toString = function(){
	var position = $(this).getPosition();
	var type = $(this).getType();
	var player = $(this).getPlayer();
	console.log('['+position.col+','+position.row+'] '+type+', player'+player);
}