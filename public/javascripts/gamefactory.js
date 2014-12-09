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

var rchars = ["a", "i", "u", "e", "o"
			"ka", "ki", "ku", "ke", "ko"
			"sa", "shi", "su", "se", "so"
			"ta", "chi", "tsu", "te", "to"
			"na", "ni", "nu", "ne", "no"
			"ha", "hi", "hu", "he", "ho"
			"ma", "mi", "mu", "me", "mo"
			"ya", "yu", "yo"
			"ra", "ri", "ru", "re", "ro"
			"wa", "wo"
			"n"];

//have card class with string -- content
	//and title -- pos in array
//randomly select from arrays to gen grid
//generate table/grid with jquery?

function getCards(numCards) {
	numCards = numCards || 16;
	var cards = [];

	var tmphchars = hchars,
		tmpkchars = kchars,
		tmprchars = rchars;

	for(var i = 0; i < numCards/2; i++) {
		var pos = Math.floor(Math.random()*hchars.length);
		
		// cards.push(new Card({
		// 	st: hchars[pos],
		// 	title: pos,
		// 	flipped: false
		// }));
		cards.push(new Card(pos, hchars[pos]));
		cards.push(new Card(pos, kchars[pos]));
		cards.push(new Card(pos, rchars[pos]));

		tmphchars = tmphchars.splice(pos, 1)[0];
		tmpkchars = tmpkchars.splice(pos, 1)[0];
		tmprchars = tmprchars.splice(pos, 1)[0];
	}

	return cards;
}

function createGame() {
	var cardNames = getCards();

	var game = new Game(cardNames);


}

function createTable(game) {
	var grid = game.grid;
	var deck = game.deck;

	$("#gametable").ready( function() {
		console.log(deck);

		var tablehtml = "";

		for(var i = 0; i < deck.length; i++) {
			tablehtml += "<tr>";
			for(var j = 0; j < deck[i].length; j++) {
				tablehtml += "<td>" + deck[i][j].string + "</td>"
			}
			table.html += "</tr>";
		}

		$("#gametable").append(tablehtml);
		
	});

}

// var memorygame = angular.module('matchgame', []);

// memorygame.factory('game', function() {
// 	var cardNames = getCards();

// 	return new Game(cardNames);
// });

// memorygame.controller('GameCtrl', function GameCtrl($scope, game) {
// 	$scope.game = game;
// });