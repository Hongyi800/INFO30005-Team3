const mongoose = require("mongoose");

// import country model
const Country = mongoose.model("countries");

// function to handle a request to get all countries
const getAllCountries = async (req, res) => {

    try {
        const all_countries = await Country.find();

        res.render('countries.pug', {
            title: 'Country List',
            countries: all_countries
        });

    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

// remember to export the functions
module.exports = {
    getAllCountries
};

