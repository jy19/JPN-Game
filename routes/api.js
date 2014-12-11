var express = require('express');
var User = require('../models/user')
var router = express.Router();

router.use(function(req, res, next) {
	console.log("using router..");
	next();
});

//test route to make sure working
router.get('/', function(req, res) {
	res.json({message: 'api'});
});


//routes that end in /users
router.route('/users')
	
	//create a new user (POST)
	.post(function(req, res) {
		var user = new User(); //new instance of user
		user.username = req.body.username; 

		user.save(function(err) {
			if(err) 
				res.send(err);

			res.json({message: 'User created!'});
		});
	});

	//get all users?


//routes that end in /users/:user_id
router.route('/users/:user_id')

	//get user by id (GET)
	.get(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if(err) 
				res.send(err);

			res.json(user);
		});
	})

	//update user by id (PUT)
	.put(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {

			if(err) 
				res.send(err);

			user.username = req.body.username; //update user name

			//save user
			user.save(function(err) {
				if(err)
					res.send(err)

				res.json({message: 'User updated' });
			});
		});
	})

	//delete a user by id
	.delete(function(req, res) {
		User.remove({
			_id: req.params.user_id
		}, function(err, user) {
			if(err) 
				res.send(err);

			res.json({ message: 'successfully deleted' });
		});
	});

module.exports = router;