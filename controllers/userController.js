const User = require('../models/user');

// function to handle user login
const userLogin = async(req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if(!username || !password){
        res.render("loginError.pug" , {
            title: 'Login ERROR!',
            h1: 'Please enter Username & Password!',
        })
    } else {
        User.find({username:username,password:password})
            .then((data)=> {
                if(data.length>0){
                    res.render("index.pug" , {
                        title: 'Login Success!',
                        h1: 'Welcome!',
                        name: username
                    })
                }else{
                    res.render("loginError.pug" , {
                        title: 'Login ERROR!',
                        h1: 'Incorrect Username/Password!',
                    })
                }
            })
            .catch((err)=>{
                res.render("loginError.pug" , {
                    title: 'Login ERROR!',
                    h1: 'Can not find Username/Password!',
                })
            })
    }

};

module.exports = {
    userLogin
};

