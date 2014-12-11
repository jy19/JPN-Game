var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local').Strategy;
var routes = require('./routes/index');
var api = require('./routes/api');
var passport = require('passport');
// var http = require('http').Server(app);

var app = express();

process.env.PORT = 9100;

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);

//middleware setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());

//passport config
app.use(passport.initialize());
app.use(passport.session());

var User = require('./models/user')
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose');

//register api?
app.use('/api', api);
app.use('/', routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;


app.listen(app.get('port'), function(){
  console.log(("Express server listening on port " + app.get('port')))
});