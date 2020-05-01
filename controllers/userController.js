// import the user model
// i.e. provide the controller a link to the user model
var users = require("../models/user");

// register and store inputs into database
const getAllUsers = (req, res) => {
    res.send(users); // return the list of users
};

// function to handle a request to a particular user
const getUserByID = (req, res) => {
    // search for author in the database via ID
    const user = users.find(user => user.id === req.params.id);

    if (user) {
        // send back the user details
        res.send(user);
    } else {
        // you can decide what to return if user is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add user
const addUser = (req, res) => {
    // extract info. from body
    const user = req.body;

    // add user to array
    users.push(user);
    res.send(users);
};

// function to modify user by ID
const updateUser = (req, res) => {
    const new_user = req.body;

    // search for user in the database via ID
    const user = users.find(user => user.id === req.params.id);
    if (!user) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_user into the original user object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(user, new_user);

    // return updated user
    res.send(user);
};

// remember to export the functions
module.exports = {
    getAllUsers,
    getUserByID,
    addUser,
    updateUser
};