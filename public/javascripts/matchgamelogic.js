/* memory card match game logic */

function Card(title, string) {
	this.title = title;
	this.string = string;
	this.flipped = false;
}

Card.prototype.flip = function() {
	this.flipped = !this.flipped;
}

function Game(cardNames) {
	// var cardDeck = makeDeck(cardNames);
	console.log("game");
	console.log(cardNames);
	this.cardDeck = makeDeck(cardNames);

	this.grid = makeGrid(this.cardDeck);
	this.unmatchedPairs = cardNames.length;

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
				this.unmatchedPairs--;
				//if unmatched pairs > 0, keep going, else won
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
function makeDeck (cardNames) {
	console.log("make deck");
	var cardDeck = [];
	cardNames.forEach(function(name) {
		cardDeck.push(new Card(name));
		cardDeck.push(new Card(name));
	});

	return cardDeck;
}

/* create the grid of cards */ 
function makeGrid (cardDeck) {
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