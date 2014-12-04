$(document).ready() {
	//display different review images on click
	//probably add kanji in by array + table later?
	$("#hbtn").click( function() {
		display(0);
	});

	$("#kbtn").click( function() {
		display(1);
	});
};

function display(type) {

	var hreview = "../images/hiragana.jpg";
	var kreview = "../images/katakana.jpg";

	if(type == 0) { //hiragana review
		$("#pagewrapper").html("");
		var html = "<div id= 'reviewImage'><img src='" + hreview + "' alt='hiragana review chart'></div>";
		$("#pagewrapper").html(html);

	}
	else if(type == 1) { //katakana review
		$("#pagewrapper").html("");
		var html = "<div id= 'reviewImage'><img src='" + kreview + "' alt='katakana review chart'></div>";
		$("#pagewrapper").html(html);
	}
	else{ //kanji review
		displayKanji();
	}
}

function displayKanji() {

}