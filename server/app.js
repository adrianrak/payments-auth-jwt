var express = require('express');
var app = express();
var db = require('./db');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../build')));
app.get('/', function(req, res) {
    res.render('index.html');
});

var UserController = require('./user/UserController');
app.use('/users', UserController);

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);


//BNRAINTREE

// The checkout route
var checkout = require('./auth/checkout');
app.use('/checkout', checkout);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;