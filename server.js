var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.get('/', function(req, res) {
    res.send('loaded')
});

app.get('./api/articles', function(req, res) {
    res.send('articles will go here.')
});

app.listen(PORT, function() {
    console.log(`listening on port: ${PORT}`)
});