function play() {
	window.location.href = "/play";
}

function review() {
	window.location.href = "/review";
}

$(document).ready( function() {
	$("#playbtn").click(play);
	$("#reviewbtn").click(review);
});