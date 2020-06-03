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

// function to modify comment
const updateComment = async (req, res) => {
    const commentId = req.params.username;
    const new_comment = req.body;

    try {
        const comments = await Comment.find({id: commentId});
        if (!comments) {
            res.status(400);
            console.log("Comment not found");
            return res.send("Comment not found");
        }

        const comment = comments[0];
        console.log("Comment found!!!", comment);

        comment["content"] = new_comment["content"];

        await comment.save();
        res.render('initial.pug', {
            title: 'Comment List'
        });
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

const getCommentByName = async (req, res) => {
    const commentName = req.params.username;

    try {
        const comments = await Comment.find({username: commentName});
        if (!comments) {
            res.status(400);
            console.log("Comment not found");
            return res.send("Comment not found");
        }

        const comment = comments[0];
        console.log("Comment found!!!", comment);


        res.render('commentupdateform.pug', {
            title: 'Update Comment',
            username: comment.username,
            content: comment.content
        });
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

// remember to export the functions
module.exports = {
    getAllComments,
    addComment,
    updateComment,
    getCommentByName
};