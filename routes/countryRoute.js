const express = require("express");

// create router
const countryRouter = express.Router();

// load/import the author controller
const countryController = require("../controllers/countryController.js");

// handle the GET request on root of the author-management path
// i.e. get all authors
countryRouter.get("/", countryController.getAllCountry);

// handle the POST request to add an author
countryRouter.post("/", countryController.addCountry);

// handle the POST request to update an author
// note that the PATCH method may be more appropriate
countryRouter.post("/:id", countryController.updateCountry);

// handle the GET request to get an author by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
countryRouter.get("/:id", countryController.getCountryByID);

// export the router
module.exports = countryRouter;