var express = require('express');
var router = express.Router();

var cafeController = require('../controllers/cafe-controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', cafeController.findAllCafes);

router.post('/insert', cafeController.createCafe);

router.post('/update', cafeController.updateCafe);

router.post('/delete', cafeController.deleteCafe);

module.exports = router;
