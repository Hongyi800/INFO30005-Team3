const comments = require("../models/comment");

// function to handle a request to get all comments
const getAllComments = (req, res) => {
    res.send(comments); // return the list of comments
};

module.exports = {
    getAllComments
}

