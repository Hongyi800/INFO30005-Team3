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
require('./models/db.js');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
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

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

function addEvent(func) {
  var preonload = window.onload;

  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      preonload();
      func();
    }
  }
}

function getMessage() {
  var comBtn = document.getElementById("btn1");
  var message = document.getElementById("message");
  var name = document.getElementById("name");
  var nameValue = "";
  var messageValue = "";

  name.onfocus = function () {
    name.value = "";
  }

  message.onfocus = function () {
    message.value = "";
  }

  comBtn.onclick = function () {
    messageValue = messageValue || "Comment Board";
    nameValue = name.value || "new user";
    var messageList = document.createElement("messageList");
    var messageDiv = document.createElement("div");
    var messageText = document.createElement(nameValue + ": " + messageValue);

    messageDiv.appendChild(messageText);
    messageList.appendChild(messageDiv);
  }
}
addEvent(getMessage());

module.exports = app;

