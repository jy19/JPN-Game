// passport.serializeUser(function(uesr, done) {
// 	done(null, user._id);
// });

// passport.deserializeUser(function(id, done) {
// 	User.findById(id, function(err, user) {
// 		done(err, user);
// 	});
// });

// //registering new user
// passport.use(
// 	'local-signup',
// 	new LocalStrategy(
// 		{
// 			username: 'username'	,
// 			password: 'password',
// 			passReqtoCallback: true
// 		},

// 		function(req, username, password, done) {
// 			process.nextTick(function() {
// 				User.findOne({'username': username}, function(err, user) {
// 					if (err) return done(err);
// 					if (user) {
// 						return done(null, false, req.flash('signinMessage', 'This username already exists, try again'));
// 					}
// 					else{
// 						var newUser = new User();
// 						newUser.username = username;
// 						newUser.local.password = newUser.generateHash(password);

// 						newUser.save(function(err) {
// 							if(err) throw err;
// 							return done(null, newUser);
// 						});
// 					}
// 				});
// 			});
// 		}
// 	)
// );

// //log in 
// passport.use(
// 	'local-login',

// 	new LocalStrategy(
// 		{	
// 			username: 'username',
// 			password: 'password',
// 			passReqToCallback: true
// 		},
// 		function(req, username, password, done) {
// 			User.findOne({'username': username }, function(err, user) {
// 				if(err) return done(err);

// 				if(!user) {
// 					return done(null, false, req.flash('signinMessage', 'This user does not exist.'));
// 				}

// 				if(!user.validPassword(password)) {
// 					return done(null, false, req.flash('signinMessage', 'Incorrect password.'));
// 				}

// 				return done(null, user);
// 			});
// 		}
// 	)
// );

var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/user');

passport.use(new BasicStrategy(
	function(username, passport, callback) {
		User.findOne({username: username}, function(err, user) {
			if(err)
				return callback(err);

			//no user found with username
			if(!user) 
				return callback(null, false);

			//making sure password is correct
			user.verifyPassword(password, function(err, isMatch) {
				if(err)
					return callback(err);

				//password didn't match
				if(!isMatch) 
					return callback(null, false);

				//success
				return callback(null, user);
			});
		});
	}
));

//user will have to authenticate every time they try to call api
exports.isAuthenticated = passport.authenticate('basic', { session: false });