const express = require("express");
const hbs = require('express-hbs');
const bodyParser = require("body-parser");
const app = express();

const router = require("./routes/route");

require('./models/db.js');

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views","views");
app.engine('hbs', hbs.express4({
  partialsDir   : __dirname +'/views',
//  defaultLayout : __dirname +'/views/layouts/main',
  extname       : '.hbs',
  layoutsDir    : __dirname +'/views/layouts',
}));
app.set("view engine","hbs");

app.use("/", router);

// GET home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// start app and listen for incoming requests on port
app.listen(process.env.PORT || 3000, () => {
  console.log("The library is running!");
});



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

module.exports = app;

