//var mongoose = require('mongoose');
exports.renderHomePage = (req, res) =>{
    res.render("index.pug");
};

exports.renderLoginPage = (req, res) =>{
    res.render("login.pug");
};

exports.renderWorldMapPage = (req, res) =>{
    res.render("country");
};

exports.renderInformationPage = (req, res) =>{
    res.render("information.pug");
};

exports.renderCommentPage = (req, res) =>{
    res.render("comment.pug");
};
//
// exports.getCountry = (req, res) =>{
//     res.send(`It is currently 0 confirmed cases in ${req.body.country}.`);
// };

