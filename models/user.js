var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose');

var UserAcc = new Schema({
	username: String,
	password: String
});

UserAcc.plugin(passportLocalMongoose);

module.exports = mongoose.model('UserAcc', UserAcc);