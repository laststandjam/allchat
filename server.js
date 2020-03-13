var createError = require('http-errors');
var express = require('express');
const bodyParser = require("body-parser")
var path = require('path');
var logger = require('morgan');
const session = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const crypto= require('crypto')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = ('gridfs-stream')
const methodOverride = require('method-override')
const fs = require('fs')

require('dotenv').config()
require('./config/passport')
require('./config/database')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const forumsRouter = require('./routes/forums')
const commentsRouter = require('./routes/comments')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())
app.use(
  session({
    secret: 'SEI-DT-69-Rocks!',
    resave: false,
    saveUninitialized: true,
  })
)

app.use(bodyParser.json())

app.use(multer({ dest: './uploads/'}).single('img'));
app.use(passport.initialize())
app.use(passport.session())


app.use(methodOverride('_method'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/forums', forumsRouter)
app.use('/', commentsRouter)

// init gfs

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