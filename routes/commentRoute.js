const express = require("express");

// create router
const commentRouter = express.Router();

// load/import the author controller
const commentController = require("../controllers/CommentController.js");

// handle the GET request on root of the author-management path
// i.e. get all authors
commentRouter.get("/", commentController.getAllComments);

// handle the POST request to add an author
commentRouter.post("/", commentController.addComments);

// handle the POST request to update an author
// note that the PATCH method may be more appropriate
commentRouter.post("/:id", commentController.updateComments);

// handle the GET request to get an author by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
commentRouter.get("/:id", commentController.getCommentsByID);

// export the router
module.exports = commentRouter;