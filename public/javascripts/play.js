$(document).ready( function() {
	console.log("play ready");
	var height = $("#romabtn").height();
	var width = $("#romabtn").width();

	$("#kanabtn").height(height).width(width);
	$("#kanjibtn").height(height).width(width);
	$("#vocabbtn").height(height).width(width);

	$("#kanabtn").click( function() {
		console.log("clicked kana btn");
		playkana();
	});

	function playkana() {
		console.log("play!!!!!?????????");
		createGame(0);
		window.location.href = "/matchgame";
	}

});