$(document).ready(function() {

	//timer set up
	var $stopwatch,
		incrementTime = 70,
		currentTime = 0,
		updateTimer = function() {
			$stopwatch.html(formatTime(currentTime));
			currentTime += incrementTime / 10;
		},
		init = function() {
			console.log("init stopwatch");
			$stopwatch = $('#stopwatch');
			Timer = $.timer(updateTimer, incrementTime, true);
		};

	this.resetStopwatch = function() {
        currentTime = 0;
        this.Timer.stop().once();
    };

	function pad(number, length) {
	    var str = '' + number;
	    while (str.length < length) {str = '0' + str;}
	    return str;
	}

	function formatTime(time) {
		var min = parseInt(time / 6000),
			sec = parseInt(time / 100) - (min * 60),
			hundredths = pad(time - (sec * 100) - (min * 6000), 2);

		return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
	}

	var game = createGame(0);

	init();
	currentTime = 0;
	Timer.stop().once();
	Timer.play();

	$("#tablewrapper").on("click", ".card", function() {
		var cardID = $(this).data("cardnum");
		var currCard = getCard(cardID);
		game.flipCard(currCard);
		if(currCard.flipped) {
			$('[data-cardnum='+cardID+']').attr("class", "card flipped");
		}
		
		for(var i = 0; i < game.grid.length; i++) {
			for(var j = 0; j < game.grid.length; j++) {
				var tempCard = getCard(i + "-" + j);
				if(tempCard.flipped) {
					$('[data-cardnum='+i + "-" + j+']').attr("class", "card flipped");
				}
				else{
					$('[data-cardnum='+i + "-" + j+']').attr("class", "card");	
				}
			}
		}
		
	});

	

});