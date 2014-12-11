// var mongoose = require('mongoose'),
// 	Schema = mongoose.Schema,
// 	passportLocalMongoose = require('passport-local-mongoose');

// var User = new Schema({
// 	username: String,
// 	password: String
// });

// User.plugin(passportLocalMongoose);

// module.exports = mongoose.model("User", User);

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//user schema
var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

//execute before each user.save call
UserSchema.pre('save', function(callback) {
	var user = this;

	//break if pw has not changed
	if(!user.isModified('password')) return callback();

	//if password changed, rehash
	bcrypt.genSalt(5, function(err, salt) {
		if(err)
			return callback(err);

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if(err) 
				return callback(err);

			user.password = hash;
			callback();
		});
	});
});

UserSchema.methods.verifyPassword = function(password, cb) {
	bcrypt.compare(password, this.password, function(err, isMatch) {
		if(err)
			return cb(err);
		cb(null, isMatch);
	});
};

var passportLocalMongoose = require('passport-local-mongoose');

UserSchema.plugin(passportLocalMongoose);

//Export mongoose model
module.exports = mongoose.model('User', UserSchema);

