var mongoose = require('mongoose');
var Cafe = mongoose.model('cafes');

var findAllCafes = function(req, res, next) {
    Cafe.find()
        .lean()
        .then(function(doc) {
            res.render('index', {items: doc});
        });
};

var createCafe = function(req, res, next) {
    var item = {
        name:req.body.name,
        address:req.body.address,
        distance:req.body.distance,
        rating:req.body.rating,
        photo:req.body.photo
    };

    var data = new Cafe(item);
    data.save();

    res.redirect('/');
};

var updateCafe = function(req, res, next) {
    var id = req.body.id;

    Cafe.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no cafe found');
        }
        doc.name = req.body.name;
        doc.address = req.body.address;
        doc.distance = req.body.distance;
        doc.rating = req.body.rating;
        doc.photo = req.body.photo;
        doc.save();
    });
    res.redirect('/');
};

var deleteCafe = function(req, res, next) {
    var id = req.body.id;
    Cafe.findByIdAndRemove(id).exec();
    res.redirect('/');
};

module.exports.findAllCafes = findAllCafes;
module.exports.createCafe = createCafe;
module.exports.updateCafe = updateCafe;
module.exports.deleteCafe = deleteCafe;