var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var countryController = require('../controllers/countryController.js');
=======
var myController = require('../controllers/controller.js');
>>>>>>> 8b17cfe8f3a5cdd23bfc339552f98e998d767a8b

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
