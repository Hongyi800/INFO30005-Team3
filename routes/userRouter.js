const express = require("express");
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create router
const userRouter = express.Router();

// load/import the user controller
const userController = require("../controllers/userController.js");

// load/import the route controller
const routeController = require("../controllers/routeController.js");

// handle the GET request on root of the user-management path
// i.e. get all authors
userRouter.get("/", (req, res) => userController.getAllUsers(req, res));

// handle the login function
userRouter.post("/loginfun", urlencodedParser, function(req, res){
    routeController.userLogin(req,res);
});

// handle the register function
userRouter.post("/registerfun", urlencodedParser, function(req, res) {
    routeController.userRegister(req,res);
});

// export the router
module.exports = userRouter;