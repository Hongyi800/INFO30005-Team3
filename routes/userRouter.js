const express = require('express');
const router = express.Router();
const User = require('../models/user');
const userController = require('../controllers/userController')

router.post('/',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    if(!username || !password){return res.send({err:-1,msg:'Missing Username or Password'})}
    User.find({username:username,password:password})
        .then((data)=> {
            if(data.length>0){
                res.send({err:0,msg:'Login in success!'})
            }else{
                res.send({err:2,msg:'Incorrect User/Password'})
            }
        })
        .catch((err)=>{
            res.send({err:0,msg:'Can not find User/Password'})
        })

})



module.exports = router;