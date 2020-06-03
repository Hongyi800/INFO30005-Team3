const mongoose = require("mongoose");

// import comment model
const Comment = mongoose.model("comment");

// function to handle a request to get all comments
const getAllComments = async (req, res) => {
    comments = []
    try {
        const all_comments = await Comment.find();
        res.render('comment.pug', {
            title: 'Comment List',
            comments: all_comments
        });

    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

// function to add comment
const addComment = async (req, res) => {
    const new_comment = req.body;
    const comment = new Comment(new_comment);

    try {

        await comment.save();
        res.render('initial.pug', {
            title: 'add comment',
        });
    } catch (err) {
        res.status(400);
        return  res.send('Database query failed');
    }
};

// remember to export the functions
module.exports = {
    getAllComments,
    addComment
};