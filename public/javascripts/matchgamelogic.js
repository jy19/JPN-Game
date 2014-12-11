/* memory card match game logic */

function Card(title, string) {
	this.title = title;
	this.string = string;
	this.flipped = false;
}

Card.prototype.flip = function() {
	this.flipped = !this.flipped;
}

function Game(cardDeck) {

	this.deck = cardDeck; 

	var tmpCards = cardDeck.slice();

	this.grid = makeGrid(tmpCards); 

	// this.timetaken = 

	// this.unmatchedPairs = cardDeck.length;

	var matched = 0;

	this.flipCard = function(card) {
		if(card.flipped) {
			return;
		}

		card.flip();

		if(!this.firstPick || this.secondPick) {

			if(this.secondPick) {
				this.firstPick.flip();
				this.secondPick.flip();
				this.firstPick = this.secondPick = undefined;
			}

			this.firstPick = card;
			//now users need to pick one more
		}
		else {
			if(this.firstPick.title === card.title) {
				console.log("matched!");
				matched++;
				console.log(matched);
				// this.unmatchedPairs--;
				//if unmatched pairs > 0, keep going, else won

				// if(this.unmatchedPairs < 0) {
				if(matched == cardDeck.length/2) {
					Timer.toggle();
					var timetaken = $('#stopwatch').text();
					console.log(timetaken);
					Timer.stop();
					// var endTime = performance.now();
					// var totaltime = endTime - startTime;

					alert("you won!");
				}
				this.firstPick = this.secondPick = undefined;
			}
			else {
				this.secondPick = card;
				//try again
			}
		}
	}
}

/* create deck -- basically an array with two of each cards in it */
//not called
function makeDeck (cardNames) {
	console.log("make deck");
	var cardDeck = [];
	cardNames.forEach(function(card) {
		cardDeck.push(new Card(card.title, card.string));
		// cardDeck.push(new Card(card.title, card.string));
	});

	return cardDeck;
}

/* create the grid of cards */ 
function makeGrid (tmpCards) {
	// console.log("making grid...");
	// console.log(cardDeck);
	var gridSize = Math.sqrt(tmpCards.length),
		grid = [];

	for(var row = 0; row < gridSize; row++) {
		grid[row] = [];
		for(var col = 0; col < gridSize; col++) {
			grid[row][col] = fillCard(tmpCards);
		}
	}

	return grid;
}

/* randomly choose a card from deck for random order of grid */

function fillCard(tmpCards) {
	var pos = Math.floor(Math.random()*tmpCards.length);
	return tmpCards.splice(pos, 1)[0];
}