const User = require('../models/user');

const userRegister = async(req, res) => {
    //get data
    let username = req.body.username;
    let password = req.body.password;
    //let {username,password} = req.body;
    if(username && password){
        User.insertMany({
            username:username,
            password:password
        })
            .then(()=>{
                res.render("index.pug" , {
                    title: 'Register Success!',
                    h1: 'Welcome!',
                    name: username
                })
               //res.send({err:0,msg:'Register Success!'})
            })
            .catch((err)=>{
                res.render("loginError.pug" , {
                    title: 'Register ERROR!',
                    h1: 'ERROR, please try again!',
                    name: username
                })
            })
    }else{
        return res.send({err:-1,msg:'Missing Username or Password'});
    }
};

module.exports = {
    userRegister
};