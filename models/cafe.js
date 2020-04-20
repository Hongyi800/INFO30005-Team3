var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cafeSchema = new Schema({
    name: {type: String, required: true},
    address: String,
    distance: String,
    rating: String,
    photo: String
}, {collection: 'Cafes'});

mongoose.model('cafes', cafeSchema);