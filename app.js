var express = require("express");
var app = express();

// object modeling for node/mongoDB
var mongoose = require("mongoose");

// requiring routes
var indexRoutes = require("./routes/index");

// connect to local DB
mongoose.connect("mongodb://localhost/leaguelity_v1", { useNewUrlParser: true });

// EJS = Embedded JavaScript instead of HTML
app.set("view engine", "ejs");
// Adding stylesheets
app.use(express.static(__dirname + "/public"));

app.use(indexRoutes);

// seedDB();

// Tell Express to listen for requests (start server)
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server has started.");
});