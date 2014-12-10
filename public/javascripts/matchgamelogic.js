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

	console.log("game");
	console.log(JSON.stringify(cardDeck));
	console.log(cardDeck);
	console.log("length of card deck: " + cardDeck.length);
	// this.cardDeck = makeDeck(cardNames);
	this.deck = cardDeck;

	this.grid = makeGrid(this.deck);
	this.unmatchedPairs = cardDeck.length;

	console.log("unmatched pairs: " + this.unmatchedPairs);

	//var startTime = performance.now; //start timer
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
				this.unmatchedPairs--;
				matched++;
				//if unmatched pairs > 0, keep going, else won

				if(matched == cardDeck.length/2) {
				// if(this.unmatchedPairs < 0) {
					
					var endTime = performance.now();
					var totaltime = endTime - startTime;

					alert("you won! time taken: " + totaltime);
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

	console.log(cardDeck);
	return cardDeck;
}

/* create the grid of cards */ 
function makeGrid (cardDeck) {
	// console.log("making grid...");
	// console.log(cardDeck);
	var gridSize = Math.sqrt(cardDeck.length),
		grid = [];

	for(var row = 0; row < gridSize; row++) {
		grid[row] = [];
		for(var col = 0; col < gridSize; col++) {
			grid[row][col] = fillCard(cardDeck);
		}
	}

	return grid;
}

/* randomly choose a card from deck for random order of grid */

function fillCard(cardDeck) {
	var pos = Math.floor(Math.random()*cardDeck.length);
	return cardDeck.splice(pos, 1)[0];
}