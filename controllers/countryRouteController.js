var countriesList = require("../models/country");

const getCountryByID = (req, res) => {
// search for author in the database via ID
  const country = countriesList.find(country => country.id === req.params.id);
    if (country){
      res.send(country); // send back the author details
    }
    else{
      // you can decide what to return if author is not found
      // currently, an empty list will be return.
      res.send([]);
    }
};

module.exports = {
  getCountryByID
};