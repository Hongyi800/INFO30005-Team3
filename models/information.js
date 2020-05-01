const mongoose = require("mongoose");

const informarionSchema = new mongoose.Schema({
  info_id: String,
  publish_date: String,
  publish_time: String,
  content: String,
});

const Informarion = mongoose.model("informarion", informationSchema, "informarion");
module.exports = Informarion;
