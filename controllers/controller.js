//var mongoose = require('mongoose');
exports.renderHomePage = (req, res) =>{
    res.render("index.pug", {
        title: "Coronavirus Defenders",
        h1: "Coronavirus Defenders"
    })
};

exports.renderLoginPage = (req, res) =>{
    res.render("login.pug");
};

exports.renderRegPage = (req, res) =>{
    res.render("register.pug");
};

exports.renderWorldMapPage = (req, res) =>{
    res.render("country.pug");
};

exports.renderInformationPage = (req, res) =>{
    res.render("information.pug");
};
