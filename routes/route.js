const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller");
const comment = require("../controllers/commentController");

// GET home page
router.get("/", controller.renderHomePage);


router.get("/login", controller.renderLoginPage);

router.get("/comment", controller.renderCommentPage);

router.get("/country", controller.renderWorldMapPage);
router.post("/", controller.getCountry);

router.post("/comment", comment.addEvent(comment.getMessage()));

router.get("/information", controller.renderInformationPage);

module.exports = router;