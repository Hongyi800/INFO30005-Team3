var mongoose = require('mongoose');

const uri = "mongodb+srv://hgu3:Ghy123456@cluster0-vyh1u.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,
    function(err){
    if(!err){
        console.log('Connected to mongo.');
    }else{
        console.log('Failed to connect to mongo!', err);
    }
});

