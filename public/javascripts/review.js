function display(type) {

	var hreview = "../images/hiragana.jpg";
	var kreview = "../images/katakana.jpg";

	var html = "<div id='backbtnwrapper'><button type='button' class='buttons' id='backbtn'>"
		+ "<span class='btntext'>back</span></button></div>";

	$("#pagewrapper").html("");

	if(type == 0) { //hiragana review
		console.log("display h review");
		html += "<div class= 'reviewImage'><img class='resize' src='" + hreview + "' alt='hiragana review chart'></div>";

	}
	else if(type == 1) { //katakana review
		html += "<div class= 'reviewImage'><img class='resize' src='" + kreview + "' alt='katakana review chart'></div>";
		
	}
	else{ //kanji review
		html += displayKanji();
	}

	$("#pagewrapper").html(html);
}

function displayKanji() {

}

$(document).ready( function() {
	console.log("document ready");
	//display different review images on click
	//probably add kanji in by array + table later?
	$("#hbtn").click( function() {
		console.log("hbtn clicked");
		display(0);
	});

	$("#kbtn").click( function() {
		display(1);
	});

	$('body').on('click', '#backbtn', function() {
		location.reload();
	});
});