const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String,required:true},
    password: {type:String,required:true}
});

const User = mongoose.model("user", userSchema);
module.exports = User;
