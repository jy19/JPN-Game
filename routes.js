var passport = require('passport');
var UserAcc = require('/models/user');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index', { title: 'game', user: req.user });
	});

	app.get('/register', function(req, res) {
		res.render('register', { title: 'register' });
	});

	app.post('/register', function(req, res) {
		UserAcc.register(new UserAcc({ username: req.body.username }), req.body.password, function(err, account) {
			if(err) {
				return res.render('register', { account: account });
			}

			passport.authenticate('local')(req, res, function() {
				res.redirect('/';)
			});
		});
	});

	app.get('/login', function(req, res) {
		res.render('login', { user: req.user });
	});

	app.post('/login', passport.authenticate('local'), function(req, res) {
		res.redirect('/');
	});

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};