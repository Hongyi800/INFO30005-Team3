const express = require("express");

const commentRouter = express.Router();

const commentController = require("../controllers/commentController");

commentRouter.get("/", commentController.getAllComments);

module.exports = commentRouter;
