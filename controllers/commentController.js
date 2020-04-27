// import the comment model
// i.e. provide the controller a link to the comment model
var comments = require("../models/comment");

// function to handle a request to get all comments
const getAllComments = (req, res) => {
    res.send(comments); // return the list of comments
};

// function to handle a request to a particular comment
const getCommentsByID = (req, res) => {
    // search for comment in the database via ID
    const comment = comments.find(comment => comment.id === req.params.id);

    if (comment) {
        // send back the comment details
        res.send(comment);
    } else {
        // you can decide what to return if comment is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add comments
const addComments = (req, res) => {
    // extract info. from body
    const comment = req.body;

    // add comments to array
    comments.push(comment);
    res.send(comments);
};

// function to modify comments by ID
const updateComments = (req, res) => {
    const new_comment = req.body;

    // search for comments in the database via ID
    const comment = comments.find(comment => comment.id === req.params.id);
    if (!comment) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_comment into the original author object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(comment, new_comment);

    // return updated comment
    res.send(comment);
};

// remember to export the functions
module.exports = {
    getAllComments,
    getCommentsByID,
    addComments,
    updateComments
};