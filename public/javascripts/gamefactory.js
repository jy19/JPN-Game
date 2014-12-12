var hchars = ["あ", "い", "う", "え", "お", 
			"か", "き", "く", "け", "こ",
			"さ", "し", "す", "せ", "そ",
			"た", "ち", "つ", "て", "と",
			"な", "に", "ぬ", "ね", "の",
			"は", "ひ", "ふ", "へ", "ほ",
			"ま", "み", "む", "め", "も",
			"や", "ゆ", "よ",
			"ら", "り", "る", "れ", "ろ",
			"わ", "を",
			"ん"];

var kchars = ["ア", "イ", "ウ", "エ", "オ",
			"カ", "キ", "ク", "ケ", "コ",
			"サ", "シ", "ス", "セ", "ソ",
			"タ", "チ", "ツ", "テ", "ト",
			"ナ", "ニ", "ヌ", "ネ", "ノ",
			"ハ", "ヒ", "フ", "ヘ", "ホ",
			"マ", "ミ", "ム", "メ", "モ",
			"ヤ", "ユ", "ヨ",
			"ラ", "リ", "ル", "レ", "ロ",
			"ワ", "ヲ",
			"ン"];

var rchars = ["a", "i", "u", "e", "o",
			"ka", "ki", "ku", "ke", "ko",
			"sa", "shi", "su", "se", "so",
			"ta", "chi", "tsu", "te", "to",
			"na", "ni", "nu", "ne", "no",
			"ha", "hi", "hu", "he", "ho",
			"ma", "mi", "mu", "me", "mo",
			"ya", "yu", "yo",
			"ra", "ri", "ru", "re", "ro",
			"wa", "wo",
			"n"];

//have card class with string -- content
	//and title -- pos in array
//randomly select from arrays to gen grid
//generate table/grid with jquery?

function getCards(chars, numCards) {
	console.log("get cards");
	console.log(chars);
	
	numCards = numCards || 16;

	console.log(numCards);
	var cards = [];

	var tmphchars = hchars,
		tmpkchars = kchars,
		tmprchars = rchars;

	var usedChars = [];


	for(var i = 0; i < numCards/2; i++) {
		var pos = Math.floor(Math.random()*hchars.length);
		while($.inArray(pos, usedChars) > -1) {
			pos = Math.floor(Math.random()*hchars.length);
		}
		usedChars.push(pos);
		// cards.push(new Card({
		// 	st: hchars[pos],
		// 	title: pos,
		// 	flipped: false
		// }));

		if($.inArray("h", chars) > -1) {
			cards.push(new Card(pos, hchars[pos]));
			// tmphchars = tmphchars.splice(pos, 1)[0];
			// tmphchars.splice(pos, 1);
		}
		if($.inArray("k", chars) > -1) {
			cards.push(new Card(pos, kchars[pos]));
			// tmpkchars.splice(pos, 1);
		}
		if($.inArray("r", chars) > -1) {
			cards.push(new Card(pos, rchars[pos]));
			// tmprchars.splice(pos, 1);
		}
		
	}

	return cards;
}

function createGame(lvltype) {
	console.log("create game");
	var cardDeck = [];

	switch(lvltype)  {
		case 0: //h and k
			cardDeck = getCards(["h", "k"]);
			break;
		case 1: //h and r
			cardDeck = getCards(["h", "r"]);
			break;
		case 2: // k and r
			cardDeck = getCards(["k", "r"]);
			break;

	}

	var game = new Game(cardDeck);
	console.log(game);

	createTable(game);

	return game;
}

var cardMap = {};

function getCard(k) {
	return cardMap[k];
}

function createTable(game) {
	console.log("Create table");
	var grid = game.grid;
	var deck = game.deck;

	$("#gametable").ready( function() {
		console.log(deck);

		var tablehtml = "";

		// for(var i = 0; i < deck.length; i++) {
		// 	tablehtml += "<tr>";
		// 	for(var j = 0; j < deck[i].length; j++) {
		// 		tablehtml += "<td><div class='content'>" + grid[i][j].string + "</div></td>"
		// 	}
		// 	tablehtml += "</tr>";
		// }

		for(var i = 0; i < grid.length; i++) {
			tablehtml += "<tr class='gamerow'>";
			for(var j = 0; j < grid.length; j++) {
				var currKey = i + "-" + j;
				cardMap[currKey] = grid[i][j];
				tablehtml += "<td><div class='cardsWrapper'>"
				tablehtml += "<div class='card' data-cardnum='" + i + "-" + j + "'>"
				tablehtml += "<div class='front content'></div>"
				tablehtml += "<div class='back content'>" 
					+ grid[i][j].string + "</div></div></div></td>"
				// tablehtml += "<td><div class='content' style='cursor: pointer;' onclick='game.flipCard()'>" + grid[i][j].string + "</div></td>"	
			}
			tablehtml += "</tr>";
		}



		$("#gametable").append(tablehtml);
		
	});

}

