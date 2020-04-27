const express = require("express");

// create router
const informationRouter = express.Router();

// load/import the author controller
const informationController = require("../controllers/informationController.js");

// handle the GET request on root of the author-management path
// i.e. get all authors
informationRouter.get("/", informationController.getAllInformation);

// handle the POST request to add an author
informationRouter.post("/", informationController.addInformation);

// handle the POST request to update an author
// note that the PATCH method may be more appropriate
informationRouter.post("/:id", informationController.updateInformation);

// handle the GET request to get an author by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
informationRouter.get("/:id", informationController.getInformationByID);

// export the router
module.exports = informationRouter;