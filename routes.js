//no longer called, moved everything to routes/index.js
var passport = require('passport');
var User = require('./models/user');

module.exports = function (app) {

	app.get('/', function (req, res) {
		// console.log("redirect to index");
		// console.log(req);
		res.render('index', { title: 'game', user: req.user });
	});

	app.get('/register', function(req, res) {
		res.render('register', { title: 'register' });
	});

	app.post('/register', function(req, res) {
		User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
			if(err) {
				return res.render('register', { info: "Sorry, that username is already taken." });
			}

			passport.authenticate('local')(req, res, function() {
				res.redirect('/');
			});
		});
	});

	// app.post('/register', passport.authenticate('local-signup', {
	// 	successRedirect: '/',
	// 	failureRedirect: '/register',
	// 	failureFlash: true
	// }));

	app.get('/login', function(req, res) {
		res.render('login', { title: 'login', user: req.user });
	});

	app.post('/login', passport.authenticate('local'), function(req, res, err) {
		console.log("login post");
		console.log(req.user);
		res.redirect('/');
	});
	
	//try adding error handling
	// app.post('/login', function(req, res, next) {
	// 	passport.authenticate('local', function(err, user, info) {
	// 		if(err) {
	// 			return next(err);
	// 		}
	// 		//gennerate json response reflecting auth status
	// 		if(!user) {
	// 			return res.send({success: false, message: 'authentication failed' });
	// 		}
	// 		return res.send({success: true, message: 'authentication succeeded' });
	// 	})(req, res, next);
	// });

	// app.post('/login', passport.authenticate('local-login', {
	// 	successRedirect: '/',
	// 	failureRedirect: '/login',
	// 	failureFlash: true
	// }));

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};