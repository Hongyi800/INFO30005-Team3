const express = require("express");

// create router
const commentRouter = express.Router();

// load/import the comment controller
const commentController = require("../controllers/commentController.js");
commentRouter.get("/", commentController.getAllComments);

// handle the POST request to add a comment
commentRouter.post("/", commentController.addComment);

// export the router
module.exports = commentRouter;

