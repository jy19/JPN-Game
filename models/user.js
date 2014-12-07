var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	username: String,
	password: String
});

User.plugin(passportLocalMongoose);

// module.exports = mongoose.model('UserAcc', UserAcc);

// var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');

// var User = mongoose.Schema( {
// 	username: String,
// 	password: String
// });

// User.methods.generateHash = function(password) {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// User.methods.validPassword = function(password) {
// 	return bcrypt.compareSync(password, this.local.password);
// };

//have a find function?

module.exports = mongoose.model('User', User);