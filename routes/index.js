var express = require('express');
var router = express.Router();

var cafeController = require('../controllers/controller.js');

var myController = require('../controllers/controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
