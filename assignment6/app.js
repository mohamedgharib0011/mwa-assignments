
var express = require('express');

var logger = require('morgan');
const validator=require('express-validator');
const cors=require('cors');

var gradesRouter = require('./routes/grades');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(validator());
app.use(cors());


app.use('/grades',gradesRouter);


app.listen(2000,()=>console.log("Server running at 2000"))

module.exports = app;
