var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// NEW: We need the hbs module to register partials later
var hbs = require('hbs'); 
const cors = require('cors'); // <--- 1. ADDED CORS IMPORT HERE AT THE TOP

// BRING IN YOUR MONGOOSE DATABASE CONNECTION
require('./app_api/models/db');

// UPDATED: Pointing to the new location inside app_server
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel'); // Added for the travel page
var apiRouter = require('./app_api/routes/index');        // NEW: Bring in the API routes

var app = express();

// UPDATED: Telling the app your views are now inside app_server/views
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// NEW: This tells the engine where to find your header/footer partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(cors({ origin: 'http://localhost:4200' })); // <--- 2. ADDED CORS MIDDLEWARE HERE (After 'app' is defined!)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// FIX: Put your API routes FIRST so Express handles them before HTML pages!
app.use('/api', apiRouter);       

// Main website routes follow below
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;