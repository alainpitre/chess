console.history = function(){
	return console.log(Chess.moves.history.getList());
};
console.historyIndex = function(){
	return console.log(Chess.moves.history.getPointer());
};