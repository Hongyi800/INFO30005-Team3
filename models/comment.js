const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: String,
  content: String,
});

const Comment = mongoose.model("comment", commentSchema, "comment");
module.exports = Comment;
