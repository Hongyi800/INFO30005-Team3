//var mongoose = require('mongoose');
exports.renderHomePage = (req, res) =>{
    res.render("index");
};

exports.renderLoginPage = (req, res) =>{
    res.render("login");
};

exports.renderWorldMapPage = (req, res) =>{
    res.render("country");
};

exports.renderInformationPage = (req, res) =>{
    res.render("information");
};

exports.renderCommentPage = (req, res) =>{
    res.render("comment");
};

exports.renderCommentPage = (req, res) =>{
    res.render("comment");
};