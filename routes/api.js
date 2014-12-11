// var express = require('express');
// var User = require('../models/user')
// var router = express.Router();

// router.use(function(req, res, next) {
// 	console.log("using router..");
// 	next();
// });

// //test route to make sure working
// router.get('/', function(req, res) {
// 	res.json({message: 'api'});
// });


// //routes that end in /users
// router.route('/users')
	
// 	//create a new user (POST)
// 	.post(function(req, res) {
// 		var user = new User(); //new instance of user
// 		user.username = req.body.username; 
// 		user.password = req.body.password;

// 		user.save(function(err) {
// 			if(err) 
// 				res.send(err);

// 			res.json({message: 'User created!', data: user });
// 		});
// 	})

// 	//get all users (GET)
// 	.get(function(req, res) {
// 		User.find(function(err, users) {
// 			if(err)
// 				res.send(err);

// 			res.json(users);
// 		});
// 	});


// //routes that end in /users/:user_id
// router.route('/users/:user_id')

// 	//get user by id (GET)
// 	.get(function(req, res) {
// 		User.findById(req.params.user_id, function(err, user) {
// 			if(err) 
// 				res.send(err);

// 			res.json(user);
// 		});
// 	})

// 	//update user by id (PUT)
// 	.put(function(req, res) {
// 		User.findById(req.params.user_id, function(err, user) {

// 			if(err) 
// 				res.send(err);

// 			user.password = req.body.password; //update password 

// 			//save user
// 			user.save(function(err) {
// 				if(err)
// 					res.send(err)

// 				res.json({message: 'User password updated' });
// 			});
// 		});
// 	})

// 	//delete a user by id
// 	.delete(function(req, res) {
// 		User.remove({
// 			_id: req.params.user_id
// 		}, function(err, user) {
// 			if(err) 
// 				res.send(err);

// 			res.json({ message: 'successfully deleted' });
// 		});
// 	});

// module.exports = router;

var User = require('../models/user');

//create endpoint /api/users for POSTS
exports.postUser = function(req, res) {
	var user = new User(); //new instance of user
		user.username = req.body.username; 
		user.password = req.body.password;

		user.save(function(err) {
			if(err) 
				console.log(err);
				res.send(err);

			res.json({message: 'User created!', data: user });
	});
};

//create endpoint /api/users for GET
exports.getUsers = function(req, res) {
	User.find(function(err, users) {
		if(err)
			res.send(err);

		res.json(users);
	});
};

//create endpoint /api/users/:user_id for GET
exports.getUser = function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		if(err) 
			res.send(err);

		res.json(user);
	});
};

//create enpoint /api/users/:user_id for PUT
exports.putUser = function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		if(err) 
			res.send(err);

		user.password = req.body.password; //update password 

		//save user
		user.save(function(err) {
			if(err)
				res.send(err)

			res.json({message: 'User password updated' });
		});
	});
};

//create endpoint /api/users/:user_id for DELETE
exports.deleteUser = function(req, res) {
	User.remove({
		_id: req.params.user_id
	}, function(err, user) {
		if(err) 
			res.send(err);

		res.json({ message: 'successfully deleted' });
	});
};