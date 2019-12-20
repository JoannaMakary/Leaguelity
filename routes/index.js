var express = require("express");
var router = express.Router();
// to access HTTP (API)
var request = require("request");

// var Champion = require("../models/champion");

// GET = Get data
// Root route
router.get("/", function(req, res) {
    request("https://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            // Send HTML page as response, looks in Views directory for Express
            res.render("landing", { data: data });
        }
    });
});

module.exports = router;