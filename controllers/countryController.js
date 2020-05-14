const mongoose = require("mongoose");

// import country model
const Country = mongoose.model("country");

// function to handle a request to get all countries
const getAllCountries = async (req, res) => {
    countries = []
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




// function to modify Country by ID
const updateCountry = async (req, res) => {
    const CountryId = req.params.id;
    const new_country = req.body;


    try {
        const countries = await Country.find({id: CountryId});
        if (!countries) {
            res.status(400);
            console.log("Country not found");
            return res.send("Country not found");
        }

        const country = countries[0];
        console.log("Country found!!!", country);

        country["country_name"] = new_country["country_name"];
        country["confirmed_case"] = new_country["confirmed_case"];


        await country.save();
        res.render('initial.pug', {
            title: 'Library App'
        });
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

// function to add country
const addCountry = async (req, res) => {
    const new_country = req.body;
    const country = new Country(new_country)

    try {
        await country.save();
        res.render('initial.pug', {
            title: 'Library App'
        });
    } catch (err) {
        res.status(400);
        return  res.send('Database query failed');
    }
};

// function to get country by id
const getCountryByID = async (req, res) => {
    const countryId = req.params.id;

    try {
        const countries = await Country.find({id: countryId});
        if (!countries) {
            res.status(400);
            console.log("Country not found");
            return res.send("Country not found");
        }

        const country = countries[0];
        console.log("Country found!!!", country);


        res.render('countryupdateform.pug', {
            title: 'Update Country',
            id: country.id,
            country_name: country.country_name,
            confirmed_case: country.confirmed_case
        });
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

// remember to export the functions
module.exports = {
    getAllCountries,
    getCountryByID,
    addCountry,
    updateCountry
};

