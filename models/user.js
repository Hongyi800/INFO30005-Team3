const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: String,
    username: String,
    password: String,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
