var mongoose = require('mongoose');

const Country = mongoose.modelSchemas;

// function to handle a request to get all authors
const getAllCountry = async (req, res) => {

    try {
        const all_country = await Country.find();
        return res.send(all_country);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};


const updateCountry = async (req, res) => {
    res.send("Working on this feature");
};

// function to add Country
const addCountry = async (req, res) => {
    res.send("Working on this feature");
};

// function to get Country by id
const getCountryByID = (req, res) => {
    res.send("Working on this feature");
};

// export the functions
module.exports = {
    getAllCountry,
    getCountryByID,
    addCountry,
    updateCountry
};