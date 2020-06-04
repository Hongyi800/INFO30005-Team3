const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  id: String,
  country: String,
  confirmed_case: Number,
  death_cases: Number,
  latitude: Number,
  longitude:Number,
});

const Country = mongoose.model("country", countrySchema, "country");
module.exports = Country;
