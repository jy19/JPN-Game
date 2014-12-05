var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
// var http = require('http').Server(app);

var app = express();

process.env.PORT = 9100;

//authentication

var passport = require('passport');
var User = require("./routes/user") 

passport.use(User.localStrategy); //set up local auth for now..
passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);

app.use(express.session({
    //default session handling
}));

app.use(passport.initialize());
app.use(passport.session());

//still need to set up express routes
//have some posts for log in/log outs

//view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);

// app.get('/', function(req, res) {
// 	res.render('index.html', {title: 'Game..'});
// });

// app.get('/', function(req, res) {
// 	res.render('index', {title: 'Memory Game'});
// });

// app.get('/review', function(req, res) {
// 	res.render('review');
// });
app.use('/', routes);

//middleware setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/index.html');
// });

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