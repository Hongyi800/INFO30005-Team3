const User = require('../models/user');

const userLogin = async(req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if(!username || !password){return res.send({err:-1,msg:'Missing Username or Password'})}
    User.find({username:username,password:password})
        .then((data)=> {
            if(data.length>0){
                res.render("index.pug" , {
                    title: 'Login Success!',
                    h1: 'Welcome!',
                    name: username
                })
                //res.send({err:0,msg:'Login in success!'})
            }else{
                res.render("loginError.pug" , {
                    title: 'Login ERROR!',
                    h1: 'ERROR, please try again!',
                    name: username
                })
                //res.send({err:2,msg:'Incorrect User/Password'})
            }
        })
        .catch((err)=>{
            res.render("loginError.pug")
            //res.send({err:0,msg:'Can not find User/Password'})
        })
};

module.exports = {
    userLogin
};

