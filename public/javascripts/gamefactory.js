var memorygame = angular.module('matchgame', []);

memorygame.factory('game', function() {
	var cardNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; //fake data

	return new Game(cardNames);
});

memorygame.controller('GameCtrl', function GameCtrl($scope, game) {
	$scope.game = game;
});

