var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var cafeController = require('../controllers/controller.js');
=======
var myController = require('../controllers/controller.js');
>>>>>>> 5791594adc79f961b4d1ed6682173f3157d79aec

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
