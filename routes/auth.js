passport.serializeUser(function(uesr, done) {
	done(null, user._id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

//registering new user
passport.use(
	'local-signup',
	new LocalStrategy(
		{
			username: 'username'	,
			password: 'password',
			passReqtoCallback: true
		},

		function(req, username, password, done) {
			process.nextTick(function() {
				User.findOne({'username': username}, function(err, user) {
					if (err) return done(err);
					if (user) {
						return done(null, false, req.flash('signinMessage', 'This username already exists, try again'));
					}
					else{
						var newUser = new User();
						newUser.username = username;
						newUser.local.password = newUser.generateHash(password);

						newUser.save(function(err) {
							if(err) throw err;
							return done(null, newUser);
						});
					}
				});
			});
		}
	)
);

//log in 
passport.use(
	'local-login',

	new LocalStrategy(
		{	
			username: 'username',
			password: 'password',
			passReqToCallback: true
		},
		function(req, username, password, done) {
			User.findOne({'username': username }, function(err, user) {
				if(err) return done(err);

				if(!user) {
					return done(null, false, req.flash('signinMessage', 'This user does not exist.'));
				}

				if(!user.validPassword(password)) {
					return done(null, false, req.flash('signinMessage', 'Incorrect password.'));
				}

				return done(null, user);
			});
		}
	)
);