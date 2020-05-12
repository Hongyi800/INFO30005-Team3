// Function to handle a request to a particular user
var users = require("../models/user");

// use username and password from database to login
const userLogin = (req, res) => {
    var username = req.body.userName;
    var password = req.body.passWord;

    // if the username or the password is empty, give a warning message
    if (!username || !password){
        res.send({status:400, message:"Your username or password cannot be empty!", url:""})
    }else{

        // user is to determine whether the inputs are valid or not
        const user = users.find(user => user.username === username && user.password === password);

        if(user){
            res.send({status:200, message:"You login successfully!", url:"/"})
        }else{
            res.send({status:400, message:"Incorrect username or password!", url:""})
        }
    }
};


// remember to export the functions
module.exports = userLogin;
