$(document).ready( function() {
	console.log("play ready");
	// var height = $("#romabtn").height();
	// var width = $("#romabtn").width();

	// $("#kanabtn").height(height).width(width);
	// $("#kanjibtn").height(height).width(width);
	// $("#vocabbtn").height(height).width(width);

	$("#kanabtn").click( function() {
		console.log("clicked kana btn");
		playkana();
	});

	function playkana() {
		// window.location.href = "/matchgame";
		window.location.href = "/matchgame.html";
	}

});