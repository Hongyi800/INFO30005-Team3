const express = require("express");
const ejs = require('ejs');
// const hbs = require('express-hbs');
const bodyParser = require("body-parser");

const app = express();
const path = require('path');

app.set('view engine', 'hbs');
// test express where the static files are kept
app.use(express.static(__dirname + '/public'));

require('./models/db.js');

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', ejs.renderFile);

var session = require("express-session");
app.use(session({
  secret: "login",
  cookie: {maxAge: 60*1000*30},
  resave: true,
  saveUninitialized: false
}));

app.get("/comment", function (req, res, next) {
  if(req.session.userinfo){
    next();
  }else{
    res.render('index.pug', {
      title: 'Failed',
      h1: "Please Login first!"
    });
  }
});

app.get("/out", function (req, res) {
  req.session.destroy(); //log out
  res.render("index.pug", {
    title: "Coronavirus Defenders",
    h1: "Coronavirus Defenders"
  });
});

app.use(express.static('routes'));

const router = require("./routes/route");
const userRouter = require('./routes/userRouter');
const regRouter = require('./routes/regRouter');
const commentRouter = require("./routes/commentRouter");
const countryRouter = require("./routes/countryRouter");

app.use("/", router);
app.use('/login',userRouter);
app.use('/register',regRouter);
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