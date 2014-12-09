var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

//Get Home Page

router.get('/', function(req, res) {
	console.log("redirect to index");
	console.log(req.user);
	res.render('index', { title: 'game', user: req.user });
});

router.get('/review', function(req, res) {
	res.render('review', {title: 'Review'});
});

router.get('/play', function(req, res) {
	res.render('play', {title: 'Play'});
});

router.get('/matchgame', function(req, res) {
	res.render('matchgame', {title: 'Memory Game'});
});

router.get('/register', function(req, res) {
	res.render('register', { title: 'register' });
});

router.post('/register', function(req, res) {
	User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
		if(err) {
			return res.render('register', { info: "Sorry, that username is already taken." });
		}

		passport.authenticate('local')(req, res, function() {
			res.redirect('/');
		});
	});
});

router.get('/login', function(req, res) {
	res.render('login', { title: 'login', user: req.user });
});

router.post('/login', function(req, res, next) {

	passport.authenticate('local', function(err, user, info) {
		if(err) {
			return next(err);
		}

		if(!user) {
			console.log("no user");
			var info = "Invalid username or password";
			res.render('login', {messages: info } );
		}
		else{
			console.log("auth");
			res.render('index', { title: 'game', user: user });	
		}

	})(req, res, next);
		
	
	
});

router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

module.exports = router;