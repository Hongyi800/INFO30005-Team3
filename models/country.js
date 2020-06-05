const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  country: String,
  confirmed_cases: Number,
<<<<<<< HEAD
  death_cases: Number,
  latitude: Number,
  longitude:Number,
=======
  death_cases: Number
>>>>>>> 07c93785fc45a78e8cce215f1dad0075e459b339
});

const Country = mongoose.model("countries", countrySchema);
module.exports = Country;
