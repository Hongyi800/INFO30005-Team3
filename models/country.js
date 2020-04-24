const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  id: String,
  name: String,
  confirmed_cases: String,
  confirmed_death: String,
  cured_num: String,
});

const Country = mongoose.model("country", countrySchema, "country");
module.exports = Country;
