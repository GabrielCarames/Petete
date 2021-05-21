const exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
const session = require('express-session'); 
var createError = require('http-errors');
const flash = require('connect-flash');
const passport = require('passport');
var express = require('express');
var logger = require('morgan');
var path = require('path');
require('./passport/authenticator');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var publicationsRouter = require('./routes/publications');
var searcherRouter = require('./routes/searcher');

var app = express();

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials',
  extname: '.hbs',
  helpers: require('./config/functions')
}));
app.set('view engine', 'hbs');

app.use(session({
  secret: "clave secreta",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/publications', publicationsRouter);
app.use('/searcher', searcherRouter);

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

require("./db");

module.exports = app;
