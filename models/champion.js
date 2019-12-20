// object modeling for node/mongoDB
var mongoose = require("mongoose");

// SCHEMA Setup
var championSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    type: [],
    position: []
});

module.exports = mongoose.model("Champion", championSchema);