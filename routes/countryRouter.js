const express = require("express");

// create router
const countryRouter = express.Router();

// load/import the country controller
const countryController = require("../controllers/countryController.js");

// handle the GET request on root of the country-management path
// i.e. get all countries

countryRouter.get("/", countryController.getAllCountries);

// handle the GET request to get a country by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
countryRouter.get("/:id", countryController.getCountryByID);

// handle the POST request to add a country
countryRouter.post("/", countryController.addCountry);


// handle the POST request to update a country
// note that the PATCH method may be more appropriate
countryRouter.post("/:id", countryController.updateCountry);

// export the router
module.exports = countryRouter;

