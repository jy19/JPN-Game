function play() {
	window.location.href = "/play";
}

function review() {
	console.log("review clicked");
	window.location.href = "/review";
}

$(document).ready( function() {
	$("#playbtn").click(play);
	$("#reviewbtn").click(review);
});