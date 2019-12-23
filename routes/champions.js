var express = require("express");
var router = express.Router();
// to access HTTP (API)
var request = require("request");

// GET = Get data
router.get("/champions", function(req, res) {
    request("https://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var results = JSON.parse(body).data;
            // Send HTML page as response, looks in Views directory for Express
            res.render("champions", { results: results });
        }
    });
});

module.exports = router;