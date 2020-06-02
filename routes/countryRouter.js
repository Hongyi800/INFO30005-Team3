const express = require("express");

// create router
const countryRouter = express.Router();

// load/import the country controller
const countryController = require("../controllers/countryController.js");

// handle the GET request on root of the country-management path
// i.e. get all countries

countryRouter.get("/", countryController.getAllCountries);

// export the router
module.exports = countryRouter;

