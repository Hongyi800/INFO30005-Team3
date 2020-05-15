const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/',(req, res) =>{
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
                res.send({err:0,msg:'Register Success!'})
            })
            .catch((err)=>{
                res.send({err:0,msg:'Register Failed!'})
            })
    }else{
        return res.send({err:-1,msg:'Missing Username or Password'});
    }

});

module.exports = router;