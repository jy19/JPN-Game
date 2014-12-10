$(document).ready(function() {
	var game = createGame(0);
	console.log("game????");
	console.log(game);
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