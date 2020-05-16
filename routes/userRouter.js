const express = require('express');
const logRouter = express.Router();

const logController = require('../controllers/userController')

logRouter.post('/', logController.userLogin);

module.exports = logRouter;