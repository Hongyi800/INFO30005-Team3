const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  cokmment_id: String,
  commenter: String,
  publish_date: String,
  publish_time: String,
  content: String,
});

const Comment = mongoose.model("comment", countrySchema, "comment");
module.exports = Comment;
