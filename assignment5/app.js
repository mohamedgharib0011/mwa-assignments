// var createError = require('http-errors');
var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var lessMiddleware = require('less-middleware');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.enable('case sensitive routing');
app.enable('strict routing');
app.disable('x-powered-by');

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port=4000;
app.listen(port,()=>console.log(`Server running at http://localhost:${port}/`));

module.exports = app;
