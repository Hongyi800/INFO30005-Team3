const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var countrySchema = new Schema({
  id: {type: String, required: true},
  name: String,
  confirmed_cases: String,
  confirmed_death: String,
  cured_num: String
});

module.exports=mongoose.model('country', countrySchema);
