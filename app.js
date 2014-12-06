var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
// var http = require('http').Server(app);

var mongoose = require('mongoose');

var LocalStrategy = require('passport-local').Strategy;

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

app.use('/', routes);

//passport config
var passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

var UserAcc = require('./models/user')
passport.use(new LocalStrategy(UserAcc.authenticate()));
passport.serializeUser(UserAcc.serializeUser());
passport.deserializeUser(UserAcc.deserializeUser());

//mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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