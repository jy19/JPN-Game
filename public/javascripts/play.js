function playkana() {
	window.location.href = "/game";
}

$(document).ready( function() {
	var height = $("#romabtn").height();
	var width = $("#romabtn").width();

	$("#kanabtn").height(height).width(width);
	$("#kanjibtn").height(height).width(width);
	$("#vocabbtn").height(height).width(width);

	$("#kanabtn").click(playkana);

});