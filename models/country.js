const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  country: String,
  confirmed_cases: Number,
  death_cases: Number
});

const Country = mongoose.model("countries", countrySchema);
module.exports = Country;
