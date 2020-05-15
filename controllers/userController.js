// import the user model
// i.e. provide the controller a link to the user model
const User = require('../models/user');


// function to handle request to add user
const addUser = async (req, res) => {
    // extract info. from body
    res.render('reg.pug');
    const new_user = req.body;
    const user = new User(new_user);

    if(user.username && user.password){
        User.insertMany({
            username:user.username,
            password:user.password
        })
            .then(()=>{
                res.send({err:0,msg:'Regist Success!'})
            })
            .catch((err)=>{
                res.send({err:0,msg:'Regist Failed!'})
            })
    }else{
        return res.send({err:-1,msg:'Missing Username or Password'});
    }

    // add user to array
    try {
        await user.save();
    } catch (err) {
        res.status(400);
        return res.send('Database query failed');
    }
};
// remember to export the functions
module.exports = {
    addUser
};
