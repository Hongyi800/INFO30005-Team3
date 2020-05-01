// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const hbs = require('express-handlebars');
//
//  require('../models/db.js');
// const app = express();
// const router = require("../routes/route");
//
// // use the body-parser middleware, which parses request bodies into req.body
// // support parsing of json
// app.use(bodyParser.json());
// // support parsing of urlencoded bodies (e.g. for forms)
// app.use(bodyParser.urlencoded({ extended: true }));
//
// app.use(express.static("public"));
// app.set("views", "views");
// app.set("view engine", "hbs");
//
// app.use("/",router);



var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');

/* connect to the database and register the schema
   put this line after the var routes = require('./routes/index'); will cause
   error: `Schema hasn't been registered for model "cafes".
 */
require('../models/db.js');

var routes = require('../routes/route');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '../views/index'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
//
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
//
//
module.exports = app;
//
