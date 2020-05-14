const express = require("express");
const ejs = require('ejs');
// const hbs = require('express-hbs');
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();
const path = require('path');

app.use(cors());

app.set('view engine', 'hbs');

// test express where the static files are kept
app.use(express.static(__dirname + '/public'));

require('./models/db.js');

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', ejs.renderFile);

app.use(express.static('routes'));

const router = require("./routes/route");
const commentRouter = require("./routes/commentRouter");
const countryRouter = require("./routes/countryRouter");


app.use("/", router);
app.use("/comment", commentRouter);
app.use("/country-management", countryRouter);

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

