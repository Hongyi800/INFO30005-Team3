const express = require('express');
const regRouter = express.Router();

const regController = require("../controllers/regController");

regRouter.post('/', regController.userRegister);

module.exports = regRouter;