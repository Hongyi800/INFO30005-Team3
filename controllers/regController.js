const User = require('../models/user');

const userRegister = async(req, res, session) => {
    //get data
    let username = req.body.username;
    let password = req.body.password;
    if (username.length < 4 || password.length < 4) {
        res.render("index.pug", {
            title: 'Register Failed',
            h1: 'please enter at least 5 characters',
        })
    } else if(username && password){
            User.insertMany({
                username:username,
                password:password
            })
                .then(()=>{
                    res.render("index.pug" , {
                        title: 'Register Success!',
                        h1: 'Register Success, Welcome!',
                        name: username
                    })
                })
                .catch((err)=>{
                    res.render("loginError.pug" , {
                        title: 'Register ERROR!',
                        h1: 'ERROR, please try again!',
                        name: username
                    })
                })
        }else{
            res.render("loginError.pug" , {
                title: 'Register ERROR!',
                h1: 'Missing Username or Password!',
            })
        }
};

module.exports = {
    userRegister
};