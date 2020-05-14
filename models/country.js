const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  id: String,
  country_name: String,
  confirmed_case: Number
});

const Country = mongoose.model("country", countrySchema, "country");
module.exports = Country;
