function play() {

}

function review() {
	window.location.href = "review.html";
}

$document.ready( function() {
	$("#playbtn").click(play);
	$("#reviewbtn").click(review);
})