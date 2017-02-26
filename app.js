var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var env = require('dotenv').config();

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// Handle 404 error page both error pages need to be at bottom of app.js
app.use(function(req, res) {
  res.status(400);
  res.render('error', {
    title: "Planets - Error-404"
  });
});

// Handle 500 error page
app.use(function(error, req, res, next) {
  res.status(500);
  res.render('error', {
    title: "Planets - Error-500",
    error: error
  });
});

module.exports = app;
