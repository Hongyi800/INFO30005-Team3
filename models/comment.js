const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment_id: String,
  commenter: String,
  publish_date: String,
  publish_time: String,
  content: String,
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
