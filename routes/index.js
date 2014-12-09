var express = require('express');
var router = express.Router();

//Get Home Page

router.get('/', function(req, res) {
	res.render('index', {title: 'Test'});
});

router.get('/review', function(req, res) {
	res.render('review', {title: 'Review'});
});

router.get('/play', function(req, res) {
	res.render('play', {title: 'Play'});
});

router.get('/game', function(req, res) {
	res.render('game', {title: 'Memory Game'});
});

module.exports = router;