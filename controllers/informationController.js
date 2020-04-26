// import the information model
// i.e. provide the controller a link to the information model
var information = require("../models/information");

// function to handle a request to get all information
const getAllInformation = (req, res) => {
    res.send(information); // return the list of information
};

// function to handle a request to a particular information
const getInformationByID = (req, res) => {
    // search for information in the database via ID
    const oneInformation = information.find(oneInformation => oneInformation.id === req.params.id);

    if (oneInformation) {
        // send back the information details
        res.send(oneInformation);
    } else {
        // you can decide what to return if information is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add information
const addInformation = (req, res) => {
    // extract info. from body
    const oneInformation = req.body;

    // add information to array
    information.push(oneInformation);
    res.send(information);
};

// function to modify information by ID
const updateInformation = (req, res) => {
    const new_information = req.body;

    // search for information in the database via ID
    const oneInformation = information.find(oneInformation => oneInformation.id === req.params.id);
    if (!oneInformation) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_information into the original author object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(oneInformation, new_information);

    // return updated information
    res.send(oneInformation);
};

// remember to export the functions
module.exports = {
    getAllInformation,
    getInformationByID,
    addInformation,
    updateInformation
};